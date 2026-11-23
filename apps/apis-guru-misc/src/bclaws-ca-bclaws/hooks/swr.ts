import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetContentAspectIdKey(
  args: InferRequestType<(typeof client.content)[':aspectId']['$get']>,
) {
  return ['content', '/content/:aspectId', args] as const
}

export function useGetContentAspectId<TError = unknown>(
  args: InferRequestType<(typeof client.content)[':aspectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
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
        ? getGetContentAspectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content[':aspectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentAspectId<TError = unknown>(
  args: InferRequestType<(typeof client.content)[':aspectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
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
        ? getGetContentAspectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.content)[':aspectId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content[':aspectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContentAspectIdCivixDocumentIdKey(
  args: InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>,
) {
  return ['content', '/content/:aspectId/:civixDocumentId', args] as const
}

export function useGetContentAspectIdCivixDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
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
        ? getGetContentAspectIdCivixDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.content[':aspectId'][':civixDocumentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentAspectIdCivixDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
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
        ? getGetContentAspectIdCivixDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.content)[':aspectId'][':civixDocumentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.content[':aspectId'][':civixDocumentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdKey(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
  >,
) {
  return ['document', '/document/id/:aspectId/:civixIndexId/:civixDocumentId', args] as const
}

export function useGetDocumentIdAspectIdCivixIndexIdCivixDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdKey(args)
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
                (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
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
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentIdAspectIdCivixIndexIdCivixDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdKey(args)
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
                (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['$get']
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
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringKey(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
  >,
) {
  return [
    'document',
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId/search/:searchString',
    args,
  ] as const
}

export function useGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringKey(args)
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
                (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
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
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].search[
            ':searchString'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringKey(args)
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
                (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['search'][':searchString']['$get']
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
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].search[
            ':searchString'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlKey(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
  >,
) {
  return ['document', '/document/id/:aspectId/:civixIndexId/:civixDocumentId/xml', args] as const
}

export function useGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml<TError = unknown>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlKey(args)
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
                (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
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
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml<TError = unknown>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlKey(args)
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
                (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['$get']
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
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringKey(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
  >,
) {
  return [
    'document',
    '/document/id/:aspectId/:civixIndexId/:civixDocumentId/xml/search/:searchString',
    args,
  ] as const
}

export function useGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringKey(args)
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
                (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
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
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.search[
            ':searchString'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringKey(args)
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
                (typeof client.document.id)[':aspectId'][':civixIndexId'][':civixDocumentId']['xml']['search'][':searchString']['$get']
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
          client.document.id[':aspectId'][':civixIndexId'][':civixDocumentId'].xml.search[
            ':searchString'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSearchAspectIdFullsearchKey(
  args: InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>,
) {
  return ['search', '/search/:aspectId/fullsearch', args] as const
}

export function useGetSearchAspectIdFullsearch<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
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
        ? getGetSearchAspectIdFullsearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':aspectId'].fullsearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchAspectIdFullsearch<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':aspectId']['fullsearch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
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
        ? getGetSearchAspectIdFullsearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)[':aspectId']['fullsearch']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':aspectId'].fullsearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
