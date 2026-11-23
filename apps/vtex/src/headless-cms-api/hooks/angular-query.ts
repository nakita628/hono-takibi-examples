import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectVCmsApiBuilderIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVCmsApiBuilderIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVCmsApiBuilderIdContentType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVCmsApiBuilderIdContentTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectVCmsApiBuilderIdContentTypeDocumentIdIndex<
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
  args: () => InferRequestType<
    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVCmsApiBuilderIdContentTypeDocumentIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
