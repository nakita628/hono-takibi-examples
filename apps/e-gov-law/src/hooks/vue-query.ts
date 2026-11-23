import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getLawsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.laws.$get>>) {
  return ['laws', '/laws', toValue(args)] as const
}

export function getLawsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.laws.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLawsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.laws.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLaws<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.laws.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
          ReturnType<typeof getLawsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.laws.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLawsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLawsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.laws.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLawRevisionsLawIdOrNumQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>,
) {
  return ['law_revisions', '/law_revisions/:law_id_or_num', toValue(args)] as const
}

export function getLawRevisionsLawIdOrNumQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLawRevisionsLawIdOrNumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.law_revisions[':law_id_or_num'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLawRevisionsLawIdOrNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLawRevisionsLawIdOrNumQueryKey>
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
          Awaited<ReturnType<(typeof client.law_revisions)[':law_id_or_num']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawRevisionsLawIdOrNumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLawRevisionsLawIdOrNumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.law_revisions[':law_id_or_num'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLawDataLawIdOrNumOrRevisionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>
  >,
) {
  return ['law_data', '/law_data/:law_id_or_num_or_revision_id', toValue(args)] as const
}

export function getLawDataLawIdOrNumOrRevisionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLawDataLawIdOrNumOrRevisionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.law_data[':law_id_or_num_or_revision_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLawDataLawIdOrNumOrRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>
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
                  ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLawDataLawIdOrNumOrRevisionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.law_data)[':law_id_or_num_or_revision_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawDataLawIdOrNumOrRevisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLawDataLawIdOrNumOrRevisionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.law_data[':law_id_or_num_or_revision_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAttachmentLawRevisionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attachment)[':law_revision_id']['$get']>>,
) {
  return ['attachment', '/attachment/:law_revision_id', toValue(args)] as const
}

export function getAttachmentLawRevisionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attachment)[':law_revision_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttachmentLawRevisionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attachment[':law_revision_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttachmentLawRevisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attachment)[':law_revision_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAttachmentLawRevisionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.attachment)[':law_revision_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttachmentLawRevisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttachmentLawRevisionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.attachment[':law_revision_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeywordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keyword.$get>>,
) {
  return ['keyword', '/keyword', toValue(args)] as const
}

export function getKeywordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keyword.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeywordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keyword.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeyword<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keyword.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>
          >,
          ReturnType<typeof getKeywordQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyword.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeywordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeywordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keyword.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLawFileFileTypeLawIdOrNumOrRevisionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
    >
  >,
) {
  return ['law_file', '/law_file/:file_type/:law_id_or_num_or_revision_id', toValue(args)] as const
}

export function getLawFileFileTypeLawIdOrNumOrRevisionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLawFileFileTypeLawIdOrNumOrRevisionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.law_file[':file_type'][':law_id_or_num_or_revision_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLawFileFileTypeLawIdOrNumOrRevisionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
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
                    (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
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
                    (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLawFileFileTypeLawIdOrNumOrRevisionIdQueryKey>
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
              (typeof client.law_file)[':file_type'][':law_id_or_num_or_revision_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLawFileFileTypeLawIdOrNumOrRevisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLawFileFileTypeLawIdOrNumOrRevisionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.law_file[':file_type'][':law_id_or_num_or_revision_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
