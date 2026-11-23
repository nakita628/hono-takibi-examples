import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMapKey() {
  return ['map'] as const
}

export function getGetMapVersionNumberCopyrightsFormatKey(
  args: InferRequestType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>,
) {
  return ['map', '/map/:versionNumber/copyrights.{format}', args] as const
}

export function useGetMapVersionNumberCopyrightsFormat<TError = unknown>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>
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
        ? getGetMapVersionNumberCopyrightsFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.map[':versionNumber']['copyrights.{format}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapVersionNumberCopyrightsFormat<TError = unknown>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>
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
        ? getGetMapVersionNumberCopyrightsFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.map)[':versionNumber']['copyrights.{format}']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.map[':versionNumber']['copyrights.{format}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMapVersionNumberCopyrightsCaptionFormatKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/copyrights/caption.{format}', args] as const
}

export function useGetMapVersionNumberCopyrightsCaptionFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberCopyrightsCaptionFormatKey(args)
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
                (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
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
          client.map[':versionNumber'].copyrights['caption.{format}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapVersionNumberCopyrightsCaptionFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberCopyrightsCaptionFormatKey(args)
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
                (typeof client.map)[':versionNumber']['copyrights']['caption.{format}']['$get']
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
          client.map[':versionNumber'].copyrights['caption.{format}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatKey(
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

export function useGetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatKey(args)
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
                (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
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
          client.map[':versionNumber'].copyrights[':minLon'][':minLat'][':maxLon'][
            ':maxLat.{format}'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatKey(args)
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
                (typeof client.map)[':versionNumber']['copyrights'][':minLon'][':minLat'][':maxLon'][':maxLat.{format}']['$get']
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
          client.map[':versionNumber'].copyrights[':minLon'][':minLat'][':maxLon'][
            ':maxLat.{format}'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMapVersionNumberCopyrightsZoomXYFormatKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/copyrights/:zoom/:X/:Y.{format}', args] as const
}

export function useGetMapVersionNumberCopyrightsZoomXYFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberCopyrightsZoomXYFormatKey(args)
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
                (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
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
          client.map[':versionNumber'].copyrights[':zoom'][':X'][':Y.{format}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapVersionNumberCopyrightsZoomXYFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberCopyrightsZoomXYFormatKey(args)
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
                (typeof client.map)[':versionNumber']['copyrights'][':zoom'][':X'][':Y.{format}']['$get']
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
          client.map[':versionNumber'].copyrights[':zoom'][':X'][':Y.{format}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMapVersionNumberStaticimageKey(
  args: InferRequestType<(typeof client.map)[':versionNumber']['staticimage']['$get']>,
) {
  return ['map', '/map/:versionNumber/staticimage', args] as const
}

export function useGetMapVersionNumberStaticimage<TError = unknown>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['staticimage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['staticimage']['$get']>>
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
        ? getGetMapVersionNumberStaticimageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['staticimage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.map[':versionNumber'].staticimage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapVersionNumberStaticimage<TError = unknown>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['staticimage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['staticimage']['$get']>>
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
        ? getGetMapVersionNumberStaticimageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['staticimage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.map[':versionNumber'].staticimage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMapVersionNumberTileLayerStyleZoomXYPbfKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/tile/:layer/:style/:zoom/:X/:Y.pbf', args] as const
}

export function useGetMapVersionNumberTileLayerStyleZoomXYPbf<TError = unknown>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberTileLayerStyleZoomXYPbfKey(args)
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
                (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
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
          client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.pbf'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapVersionNumberTileLayerStyleZoomXYPbf<TError = unknown>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberTileLayerStyleZoomXYPbfKey(args)
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
                (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.pbf']['$get']
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
          client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.pbf'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMapVersionNumberTileLayerStyleZoomXYFormatKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/tile/:layer/:style/:zoom/:X/:Y.{format}', args] as const
}

export function useGetMapVersionNumberTileLayerStyleZoomXYFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberTileLayerStyleZoomXYFormatKey(args)
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
                (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
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
          client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.{format}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapVersionNumberTileLayerStyleZoomXYFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberTileLayerStyleZoomXYFormatKey(args)
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
                (typeof client.map)[':versionNumber']['tile'][':layer'][':style'][':zoom'][':X'][':Y.{format}']['$get']
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
          client.map[':versionNumber'].tile[':layer'][':style'][':zoom'][':X'][':Y.{format}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMapVersionNumberWmsIndexKey(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
) {
  return ['map', '/map/:versionNumber/wms/', args] as const
}

export function useGetMapVersionNumberWmsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
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
        ? getGetMapVersionNumberWmsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.map[':versionNumber'].wms.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapVersionNumberWmsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
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
        ? getGetMapVersionNumberWmsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.map[':versionNumber'].wms.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMapVersionNumberWmsIndex2Key(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
) {
  return ['map', '/map/:versionNumber/wms//', args] as const
}

export function useGetMapVersionNumberWmsIndex2<TError = unknown>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
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
        ? getGetMapVersionNumberWmsIndex2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.map[':versionNumber'].wms.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapVersionNumberWmsIndex2<TError = unknown>(
  args: InferRequestType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
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
        ? getGetMapVersionNumberWmsIndex2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.map)[':versionNumber']['wms']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.map[':versionNumber'].wms.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlKey(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
  >,
) {
  return ['map', '/map/:versionNumber/wmts/:key/:wmtsVersion/WMTSCapabilities.xml', args] as const
}

export function useGetMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXml<TError = unknown>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlKey(args)
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
                (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
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
          client.map[':versionNumber'].wmts[':key'][':wmtsVersion']['WMTSCapabilities.xml'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXml<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMapVersionNumberWmtsKeyWmtsVersionWMTSCapabilitiesXmlKey(args)
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
                (typeof client.map)[':versionNumber']['wmts'][':key'][':wmtsVersion']['WMTSCapabilities.xml']['$get']
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
          client.map[':versionNumber'].wmts[':key'][':wmtsVersion']['WMTSCapabilities.xml'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
