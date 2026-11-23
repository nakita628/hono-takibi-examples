import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMapKey() {
  return ['map'] as const
}

export function getMapVersionNumberCopyrightsFormatQueryKey(
  args: InferRequestType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>,
) {
  return ['map', '/map/:versionNumber/copyrights.{format}', args] as const
}

export function getMapVersionNumberCopyrightsFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>>
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
        client.map[':versionNumber']['copyrights.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMapVersionNumberCopyrightsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapVersionNumberCopyrightsFormatQueryKey>
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
      ...getMapVersionNumberCopyrightsFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapVersionNumberCopyrightsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapVersionNumberCopyrightsFormatQueryKey>
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
      ...getMapVersionNumberCopyrightsFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMapVersionNumberCopyrightsCaptionFormatQueryKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/copyrights/caption.{format}', args] as const
}

export function getMapVersionNumberCopyrightsCaptionFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
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
        client.map[':versionNumber'].copyrights['caption.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMapVersionNumberCopyrightsCaptionFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapVersionNumberCopyrightsCaptionFormatQueryKey>
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
      ...getMapVersionNumberCopyrightsCaptionFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapVersionNumberCopyrightsCaptionFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapVersionNumberCopyrightsCaptionFormatQueryKey>
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
      ...getMapVersionNumberCopyrightsCaptionFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
  >,
) {
  return [
    'map',
    '/map/:versionNumber/copyrights/:minLon/:minLat/:maxLon/:maxLat.{format}',
    args,
  ] as const
}

export function getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
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
          ':maxLat.{format}'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey>
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
      ...getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey>
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
      ...getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMapVersionNumberCopyrightsZoomXYFormatQueryKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/copyrights/:zoom/:X/:Y.{format}', args] as const
}

export function getMapVersionNumberCopyrightsZoomXYFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
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
        client.map[':versionNumber'].copyrights[':zoom'][':X'][':Y.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMapVersionNumberCopyrightsZoomXYFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapVersionNumberCopyrightsZoomXYFormatQueryKey>
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
      ...getMapVersionNumberCopyrightsZoomXYFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapVersionNumberCopyrightsZoomXYFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapVersionNumberCopyrightsZoomXYFormatQueryKey>
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
      ...getMapVersionNumberCopyrightsZoomXYFormatQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMapVersionNumberStaticimage<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMapVersionNumberStaticimageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapVersionNumberStaticimage<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMapVersionNumberStaticimageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMapVersionNumberTileLayerStyleZoomXYPbf<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMapVersionNumberTileLayerStyleZoomXYPbfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapVersionNumberTileLayerStyleZoomXYPbf<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMapVersionNumberTileLayerStyleZoomXYPbfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/tile/:layer/:style/:zoom/:X/:Y.{format}', args] as const
}

export function getMapVersionNumberTileLayerStyleZoomXYFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
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
        client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.{format}'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useMapVersionNumberTileLayerStyleZoomXYFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey>
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
      ...getMapVersionNumberTileLayerStyleZoomXYFormatQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapVersionNumberTileLayerStyleZoomXYFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey>
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
      ...getMapVersionNumberTileLayerStyleZoomXYFormatQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMapVersionNumberWmsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMapVersionNumberWmsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapVersionNumberWmsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMapVersionNumberWmsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMapVersionNumberWmsIndex2<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMapVersionNumberWmsIndex2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapVersionNumberWmsIndex2<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMapVersionNumberWmsIndex2QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXml<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXml<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
