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

export function getMapKey() {
  return ['map'] as const
}

export function getMapVersionNumberCopyrightsFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>
  >,
) {
  return ['map', '/map/:versionNumber/copyrights.{format}', toValue(args)] as const
}

export function getMapVersionNumberCopyrightsFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapVersionNumberCopyrightsFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map[':versionNumber']['copyrights.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMapVersionNumberCopyrightsFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberCopyrightsFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapVersionNumberCopyrightsFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map[':versionNumber']['copyrights.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMapVersionNumberCopyrightsCaptionFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
    >
  >,
) {
  return ['map', '/map/:versionNumber/copyrights/caption.{format}', toValue(args)] as const
}

export function getMapVersionNumberCopyrightsCaptionFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapVersionNumberCopyrightsCaptionFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map[':versionNumber'].copyrights['caption.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
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
                    (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
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
                    (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMapVersionNumberCopyrightsCaptionFormatQueryKey>
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
              (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberCopyrightsCaptionFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapVersionNumberCopyrightsCaptionFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map[':versionNumber'].copyrights['caption.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
    >
  >,
) {
  return [
    'map',
    '/map/:versionNumber/copyrights/:minLon/:minLat/:maxLon/:maxLat.{format}',
    toValue(args),
  ] as const
}

export function getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map[':versionNumber'].copyrights[':minLon'][':minLat'][':maxLon'][
          ':maxLat.{format}'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
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
                    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
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
                    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey>
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
              (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.map[':versionNumber'].copyrights[':minLon'][':minLat'][':maxLon'][
            ':maxLat.{format}'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMapVersionNumberCopyrightsZoomXYFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
    >
  >,
) {
  return ['map', '/map/:versionNumber/copyrights/:zoom/:X/:Y.{format}', toValue(args)] as const
}

export function getMapVersionNumberCopyrightsZoomXYFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapVersionNumberCopyrightsZoomXYFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map[':versionNumber'].copyrights[':zoom'][':X'][':Y.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
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
                    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
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
                    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMapVersionNumberCopyrightsZoomXYFormatQueryKey>
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
              (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberCopyrightsZoomXYFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapVersionNumberCopyrightsZoomXYFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map[':versionNumber'].copyrights[':zoom'][':X'][':Y.{format}'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMapVersionNumberStaticimageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['staticimage']['$get']>
  >,
) {
  return ['map', '/map/:versionNumber/staticimage', toValue(args)] as const
}

export function getMapVersionNumberStaticimageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['staticimage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapVersionNumberStaticimageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map[':versionNumber'].staticimage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['staticimage']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.map)[':versionNumber']['staticimage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMapVersionNumberStaticimageQueryKey>
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
          Awaited<ReturnType<(typeof client.map)[':versionNumber']['staticimage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberStaticimageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapVersionNumberStaticimageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map[':versionNumber'].staticimage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMapVersionNumberTileLayerStyleZoomXYPbfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
    >
  >,
) {
  return ['map', '/map/:versionNumber/tile/:layer/:style/:zoom/:X/:Y.pbf', toValue(args)] as const
}

export function getMapVersionNumberTileLayerStyleZoomXYPbfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapVersionNumberTileLayerStyleZoomXYPbfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.pbf'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
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
                    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
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
                    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMapVersionNumberTileLayerStyleZoomXYPbfQueryKey>
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
              (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberTileLayerStyleZoomXYPbfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapVersionNumberTileLayerStyleZoomXYPbfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.pbf'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
    >
  >,
) {
  return [
    'map',
    '/map/:versionNumber/tile/:layer/:style/:zoom/:X/:Y.{format}',
    toValue(args),
  ] as const
}

export function getMapVersionNumberTileLayerStyleZoomXYFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.{format}'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
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
                    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
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
                    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey>
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
              (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapVersionNumberTileLayerStyleZoomXYFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.{format}'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getMapVersionNumberWmsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>
  >,
) {
  return ['map', '/map/:versionNumber/wms/', toValue(args)] as const
}

export function getMapVersionNumberWmsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapVersionNumberWmsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map[':versionNumber'].wms.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMapVersionNumberWmsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberWmsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapVersionNumberWmsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map[':versionNumber'].wms.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMapVersionNumberWmsIndex2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>
  >,
) {
  return ['map', '/map/:versionNumber/wms//', toValue(args)] as const
}

export function getMapVersionNumberWmsIndex2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMapVersionNumberWmsIndex2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map[':versionNumber'].wms.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMapVersionNumberWmsIndex2QueryKey>
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
          Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberWmsIndex2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMapVersionNumberWmsIndex2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.map[':versionNumber'].wms.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
    >
  >,
) {
  return [
    'map',
    '/map/:versionNumber/wmts/:key/:wmtsVersion/WMTSCapabilities.xml',
    toValue(args),
  ] as const
}

export function getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.map[':versionNumber'].wmts[':key'][':wmtsVersion']['WMTSCapabilities.xml'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
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
                    (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
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
                    (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryKey>
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
              (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.map[':versionNumber'].wmts[':key'][':wmtsVersion']['WMTSCapabilities.xml'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
