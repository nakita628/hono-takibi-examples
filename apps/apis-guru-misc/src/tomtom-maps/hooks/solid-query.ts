import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMapKey() {
  return ['map'] as const
}

export function getMapVersionNumberCopyrightsFormatQueryKey(
  args: InferRequestType<(typeof client.map)[':versionNumber']['copyrights.:format']['$get']>,
) {
  return ['map', '/map/:versionNumber/copyrights.:format', args] as const
}

export function getMapVersionNumberCopyrightsFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['copyrights.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['copyrights.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.map)[':versionNumber']['copyrights.:format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberCopyrightsFormatQueryKey>
  >({
    queryKey: getMapVersionNumberCopyrightsFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map[':versionNumber']['copyrights.:format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapVersionNumberCopyrightsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['copyrights.:format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.map)[':versionNumber']['copyrights.:format']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.map)[':versionNumber']['copyrights.:format']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMapVersionNumberCopyrightsFormatQueryKey>
        >
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
      ...getMapVersionNumberCopyrightsFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMapVersionNumberCopyrightsCaptionFormatQueryKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.:format']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/copyrights/caption.:format', args] as const
}

export function getMapVersionNumberCopyrightsCaptionFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.map)[':versionNumber']['copyrights']['caption.:format']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.map)[':versionNumber']['copyrights']['caption.:format']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberCopyrightsCaptionFormatQueryKey>
  >({
    queryKey: getMapVersionNumberCopyrightsCaptionFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map[':versionNumber'].copyrights['caption.:format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapVersionNumberCopyrightsCaptionFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.map)[':versionNumber']['copyrights']['caption.:format']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.:format']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.map)[':versionNumber']['copyrights']['caption.:format']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMapVersionNumberCopyrightsCaptionFormatQueryKey>
        >
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
      ...getMapVersionNumberCopyrightsCaptionFormatQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.:format']['$get']
  >,
) {
  return [
    'map',
    '/map/:versionNumber/copyrights/:minLon/:minLat/:maxLon/:maxLat.:format',
    args,
  ] as const
}

export function getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.:format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.:format']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey>
  >({
    queryKey: getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map[':versionNumber'].copyrights[':minLon'][':minLat'][':maxLon'][
          ':maxLat.:format'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.:format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.:format']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.:format']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey>
        >
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
      ...getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMapVersionNumberCopyrightsZoomXYFormatQueryKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.:format']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/copyrights/:zoom/:X/:Y.:format', args] as const
}

export function getMapVersionNumberCopyrightsZoomXYFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.:format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.:format']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberCopyrightsZoomXYFormatQueryKey>
  >({
    queryKey: getMapVersionNumberCopyrightsZoomXYFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map[':versionNumber'].copyrights[':zoom'][':X'][':Y.:format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapVersionNumberCopyrightsZoomXYFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.:format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.:format']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.:format']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMapVersionNumberCopyrightsZoomXYFormatQueryKey>
        >
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
      ...getMapVersionNumberCopyrightsZoomXYFormatQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMapVersionNumberStaticimageQueryKey(
  args: InferRequestType<(typeof client.map)[':versionNumber']['staticimage']['$get']>,
) {
  return ['map', '/map/:versionNumber/staticimage', args] as const
}

export function getMapVersionNumberStaticimageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['staticimage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['staticimage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.map)[':versionNumber']['staticimage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberStaticimageQueryKey>
  >({
    queryKey: getMapVersionNumberStaticimageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map[':versionNumber'].staticimage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapVersionNumberStaticimage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['staticimage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.map)[':versionNumber']['staticimage']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.map)[':versionNumber']['staticimage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMapVersionNumberStaticimageQueryKey>
        >
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
      ...getMapVersionNumberStaticimageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMapVersionNumberTileLayerStyleZoomXYPbfQueryKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/tile/:layer/:style/:zoom/:X/:Y.pbf', args] as const
}

export function getMapVersionNumberTileLayerStyleZoomXYPbfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberTileLayerStyleZoomXYPbfQueryKey>
  >({
    queryKey: getMapVersionNumberTileLayerStyleZoomXYPbfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.pbf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapVersionNumberTileLayerStyleZoomXYPbf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMapVersionNumberTileLayerStyleZoomXYPbfQueryKey>
        >
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
      ...getMapVersionNumberTileLayerStyleZoomXYPbfQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.:format']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/tile/:layer/:style/:zoom/:X/:Y.:format', args] as const
}

export function getMapVersionNumberTileLayerStyleZoomXYFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.:format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.:format']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey>
  >({
    queryKey: getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.:format'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createMapVersionNumberTileLayerStyleZoomXYFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.:format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.:format']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.:format']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey>
        >
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
      ...getMapVersionNumberTileLayerStyleZoomXYFormatQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMapVersionNumberWmsIndexQueryKey(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
) {
  return ['map', '/map/:versionNumber/wms/', args] as const
}

export function getMapVersionNumberWmsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberWmsIndexQueryKey>
  >({
    queryKey: getMapVersionNumberWmsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map[':versionNumber'].wms.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapVersionNumberWmsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMapVersionNumberWmsIndexQueryKey>
        >
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
      ...getMapVersionNumberWmsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMapVersionNumberWmsIndex2QueryKey(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
) {
  return ['map', '/map/:versionNumber/wms//', args] as const
}

export function getMapVersionNumberWmsIndex2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberWmsIndex2QueryKey>
  >({
    queryKey: getMapVersionNumberWmsIndex2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map[':versionNumber'].wms.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMapVersionNumberWmsIndex2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMapVersionNumberWmsIndex2QueryKey>
        >
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
      ...getMapVersionNumberWmsIndex2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/wmts/:key/:wmtsVersion/WMTSCapabilities.xml', args] as const
}

export function getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryKey>
  >({
    queryKey: getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.map[':versionNumber'].wmts[':key'][':wmtsVersion']['WMTSCapabilities.xml'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryKey>
        >
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
      ...getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
