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

export function getVKey() {
  return ['_v'] as const
}

export function getVCmsApiBuilderIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>
  >,
) {
  return ['_v', '/_v/cms/api/:builderId/', toValue(args)] as const
}

export function getVCmsApiBuilderIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVCmsApiBuilderIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client._v.cms.api[':builderId'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVCmsApiBuilderIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVCmsApiBuilderIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVCmsApiBuilderIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVCmsApiBuilderIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client._v.cms.api[':builderId'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVCmsApiBuilderIdContentTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>
  >,
) {
  return ['_v', '/_v/cms/api/:builderId/:content-type', toValue(args)] as const
}

export function getVCmsApiBuilderIdContentTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVCmsApiBuilderIdContentTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client._v.cms.api[':builderId'][':content-type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVCmsApiBuilderIdContentType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>
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
                  ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVCmsApiBuilderIdContentTypeQueryKey>
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
          Awaited<ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVCmsApiBuilderIdContentTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVCmsApiBuilderIdContentTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client._v.cms.api[':builderId'][':content-type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
    >
  >,
) {
  return ['_v', '/_v/cms/api/:builderId/:content-type/:document-id/', toValue(args)] as const
}

export function getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client._v.cms.api[':builderId'][':content-type'][':document-id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVCmsApiBuilderIdContentTypeDocumentIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
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
                    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
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
                    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryKey>
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
              (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client._v.cms.api[':builderId'][':content-type'][':document-id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
