import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVKey() {
  return ['_v'] as const
}

export function getVCmsApiBuilderIdIndexQueryKey(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>,
) {
  return ['_v', '/_v/cms/api/:builderId/', args] as const
}

export function getVCmsApiBuilderIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVCmsApiBuilderIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client._v.cms.api[':builderId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVCmsApiBuilderIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVCmsApiBuilderIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVCmsApiBuilderIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVCmsApiBuilderIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVCmsApiBuilderIdContentTypeQueryKey(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>,
) {
  return ['_v', '/_v/cms/api/:builderId/:content-type', args] as const
}

export function getVCmsApiBuilderIdContentTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVCmsApiBuilderIdContentTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client._v.cms.api[':builderId'][':content-type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVCmsApiBuilderIdContentTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVCmsApiBuilderIdContentType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVCmsApiBuilderIdContentTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryKey(
  args: InferRequestType<
    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
  >,
) {
  return ['_v', '/_v/cms/api/:builderId/:content-type/:document-id/', args] as const
}

export function getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client._v.cms.api[':builderId'][':content-type'][':document-id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVCmsApiBuilderIdContentTypeDocumentIdIndex<
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
  args: InferRequestType<
    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
