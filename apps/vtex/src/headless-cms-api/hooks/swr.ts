import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVKey() {
  return ['_v'] as const
}

export function getGetVCmsApiBuilderIdIndexKey(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>,
) {
  return ['_v', '/_v/cms/api/:builderId/', args] as const
}

export function useGetVCmsApiBuilderIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
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
        ? getGetVCmsApiBuilderIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client._v.cms.api[':builderId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVCmsApiBuilderIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
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
        ? getGetVCmsApiBuilderIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v.cms.api)[':builderId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client._v.cms.api[':builderId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVCmsApiBuilderIdContentTypeKey(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>,
) {
  return ['_v', '/_v/cms/api/:builderId/:content-type', args] as const
}

export function useGetVCmsApiBuilderIdContentType<TError = unknown>(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>>
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
        ? getGetVCmsApiBuilderIdContentTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client._v.cms.api[':builderId'][':content-type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVCmsApiBuilderIdContentType<TError = unknown>(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>>
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
        ? getGetVCmsApiBuilderIdContentTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client._v.cms.api[':builderId'][':content-type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVCmsApiBuilderIdContentTypeDocumentIdIndexKey(
  args: InferRequestType<
    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
  >,
) {
  return ['_v', '/_v/cms/api/:builderId/:content-type/:document-id/', args] as const
}

export function useGetVCmsApiBuilderIdContentTypeDocumentIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVCmsApiBuilderIdContentTypeDocumentIdIndexKey(args)
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
                (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
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
          client._v.cms.api[':builderId'][':content-type'][':document-id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVCmsApiBuilderIdContentTypeDocumentIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVCmsApiBuilderIdContentTypeDocumentIdIndexKey(args)
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
                (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
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
          client._v.cms.api[':builderId'][':content-type'][':document-id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
