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

export function getContentKey() {
  return ['content'] as const
}

export function getDocumentKey() {
  return ['document'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getContentAspectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content)[':aspectId']['$get']>>,
) {
  return ['content', '/content/:aspectId', toValue(args)] as const
}

export function getContentAspectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content)[':aspectId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentAspectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content[':aspectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentAspectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.content)[':aspectId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContentAspectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentAspectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentAspectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content[':aspectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentAspectIdCivixDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>
  >,
) {
  return ['content', '/content/:aspectId/:civixDocumentId', toValue(args)] as const
}

export function getContentAspectIdCivixDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentAspectIdCivixDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content[':aspectId'][':civixDocumentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentAspectIdCivixDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>
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
                  ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContentAspectIdCivixDocumentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentAspectIdCivixDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentAspectIdCivixDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content[':aspectId'][':civixDocumentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
    >
  >,
) {
  return [
    'document',
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId',
    toValue(args),
  ] as const
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentIdAspectIdCivixIndexIdCivixDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
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
                    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
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
                    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryKey>
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
              (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentIdAspectIdCivixIndexIdCivixDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
    >
  >,
) {
  return [
    'document',
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId/search/:searchString',
    toValue(args),
  ] as const
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].search[
          ':searchString'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
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
                    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
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
                    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryKey
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
              (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].search[
            ':searchString'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
    >
  >,
) {
  return [
    'document',
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId/xml',
    toValue(args),
  ] as const
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
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
                    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
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
                    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryKey>
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
              (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
    >
  >,
) {
  return [
    'document',
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId/xml/search/:searchString',
    toValue(args),
  ] as const
}

export function getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.search[
          ':searchString'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
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
                    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
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
                    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryKey
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
              (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.search[
            ':searchString'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchAspectIdFullsearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>
  >,
) {
  return ['search', '/search/:aspectId/fullsearch', toValue(args)] as const
}

export function getSearchAspectIdFullsearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchAspectIdFullsearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':aspectId'].fullsearch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchAspectIdFullsearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchAspectIdFullsearchQueryKey>
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
          Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchAspectIdFullsearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchAspectIdFullsearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':aspectId'].fullsearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
