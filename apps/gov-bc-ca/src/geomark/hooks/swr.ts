import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGeomarksKey() {
  return ['geomarks'] as const
}

export function getPostGeomarksCopyKey() {
  return ['geomarks', '/geomarks/copy', 'POST'] as const
}

export function usePostGeomarksCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geomarks.copy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.geomarks.copy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeomarksCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.geomarks.copy.$post> }) =>
        parseResponse(client.geomarks.copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGeomarksNewKey() {
  return ['geomarks', '/geomarks/new', 'POST'] as const
}

export function usePostGeomarksNew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geomarks.new.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.geomarks.new.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeomarksNewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.geomarks.new.$post> }) =>
        parseResponse(client.geomarks.new.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGeomarksGeomarkIdFileFormatExtensionKey(
  args: InferRequestType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>,
) {
  return ['geomarks', '/geomarks/:geomarkId.{fileFormatExtension}', args] as const
}

export function useGetGeomarksGeomarkIdFileFormatExtension<TError = unknown>(
  args: InferRequestType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>
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
        ? getGetGeomarksGeomarkIdFileFormatExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.geomarks[':geomarkId.{fileFormatExtension}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeomarksGeomarkIdFileFormatExtension<TError = unknown>(
  args: InferRequestType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>
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
        ? getGetGeomarksGeomarkIdFileFormatExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.geomarks)[':geomarkId.{fileFormatExtension}']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.geomarks[':geomarkId.{fileFormatExtension}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGeomarksGeomarkIdBoundingBoxFileFormatExtensionKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/boundingBox.{fileFormatExtension}', args] as const
}

export function useGetGeomarksGeomarkIdBoundingBoxFileFormatExtension<TError = unknown>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
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
        ? getGetGeomarksGeomarkIdBoundingBoxFileFormatExtensionKey(args)
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
                (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
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
          client.geomarks[':geomarkId']['boundingBox.{fileFormatExtension}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeomarksGeomarkIdBoundingBoxFileFormatExtension<TError = unknown>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
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
        ? getGetGeomarksGeomarkIdBoundingBoxFileFormatExtensionKey(args)
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
                (typeof client.geomarks)[':geomarkId']['boundingBox.{fileFormatExtension}']['$get']
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
          client.geomarks[':geomarkId']['boundingBox.{fileFormatExtension}'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGeomarksGeomarkIdFeatureFileFormatExtensionKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/feature.{fileFormatExtension}', args] as const
}

export function useGetGeomarksGeomarkIdFeatureFileFormatExtension<TError = unknown>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
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
        ? getGetGeomarksGeomarkIdFeatureFileFormatExtensionKey(args)
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
                (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
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
          client.geomarks[':geomarkId']['feature.{fileFormatExtension}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeomarksGeomarkIdFeatureFileFormatExtension<TError = unknown>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
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
        ? getGetGeomarksGeomarkIdFeatureFileFormatExtensionKey(args)
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
                (typeof client.geomarks)[':geomarkId']['feature.{fileFormatExtension}']['$get']
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
          client.geomarks[':geomarkId']['feature.{fileFormatExtension}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGeomarksGeomarkIdPartsFileFormatExtensionKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/parts.{fileFormatExtension}', args] as const
}

export function useGetGeomarksGeomarkIdPartsFileFormatExtension<TError = unknown>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
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
        ? getGetGeomarksGeomarkIdPartsFileFormatExtensionKey(args)
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
                (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
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
          client.geomarks[':geomarkId']['parts.{fileFormatExtension}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeomarksGeomarkIdPartsFileFormatExtension<TError = unknown>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
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
        ? getGetGeomarksGeomarkIdPartsFileFormatExtensionKey(args)
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
                (typeof client.geomarks)[':geomarkId']['parts.{fileFormatExtension}']['$get']
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
          client.geomarks[':geomarkId']['parts.{fileFormatExtension}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGeomarksGeomarkIdPointFileFormatExtensionKey(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
  >,
) {
  return ['geomarks', '/geomarks/:geomarkId/point.{fileFormatExtension}', args] as const
}

export function useGetGeomarksGeomarkIdPointFileFormatExtension<TError = unknown>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
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
        ? getGetGeomarksGeomarkIdPointFileFormatExtensionKey(args)
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
                (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
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
          client.geomarks[':geomarkId']['point.{fileFormatExtension}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeomarksGeomarkIdPointFileFormatExtension<TError = unknown>(
  args: InferRequestType<
    (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
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
        ? getGetGeomarksGeomarkIdPointFileFormatExtensionKey(args)
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
                (typeof client.geomarks)[':geomarkId']['point.{fileFormatExtension}']['$get']
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
          client.geomarks[':geomarkId']['point.{fileFormatExtension}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
