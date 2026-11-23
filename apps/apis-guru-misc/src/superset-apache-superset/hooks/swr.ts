import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnnotationLayerKey() {
  return ['annotation_layer'] as const
}

export function getAsyncEventKey() {
  return ['async_event'] as const
}

export function getCachekeyKey() {
  return ['cachekey'] as const
}

export function getChartKey() {
  return ['chart'] as const
}

export function getCssTemplateKey() {
  return ['css_template'] as const
}

export function getDashboardKey() {
  return ['dashboard'] as const
}

export function getDatabaseKey() {
  return ['database'] as const
}

export function getDatasetKey() {
  return ['dataset'] as const
}

export function getLogKey() {
  return ['log'] as const
}

export function getMenuKey() {
  return ['menu'] as const
}

export function getOpenapiKey() {
  return ['openapi'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getReportKey() {
  return ['report'] as const
}

export function getSavedQueryKey() {
  return ['saved_query'] as const
}

export function getSecurityKey() {
  return ['security'] as const
}

export function getGetAnnotationLayerIndexKey(
  args: InferRequestType<typeof client.annotation_layer.index.$get>,
) {
  return ['annotation_layer', '/annotation_layer/', args] as const
}

export function useGetAnnotationLayerIndex<TError = unknown>(
  args: InferRequestType<typeof client.annotation_layer.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>
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
        ? getGetAnnotationLayerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotation_layer.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationLayerIndex<TError = unknown>(
  args: InferRequestType<typeof client.annotation_layer.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>
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
        ? getGetAnnotationLayerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotation_layer.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnnotationLayerIndexKey() {
  return ['annotation_layer', '/annotation_layer/', 'POST'] as const
}

export function usePostAnnotationLayerIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.annotation_layer.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnnotationLayerIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.annotation_layer.index.$post> },
      ) => parseResponse(client.annotation_layer.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnnotationLayerIndexKey() {
  return ['annotation_layer', '/annotation_layer/', 'DELETE'] as const
}

export function useDeleteAnnotationLayerIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer.index.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.annotation_layer.index.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnnotationLayerIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.annotation_layer.index.$delete> },
      ) => parseResponse(client.annotation_layer.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnnotationLayerInfoKey(
  args: InferRequestType<typeof client.annotation_layer._info.$get>,
) {
  return ['annotation_layer', '/annotation_layer/_info', args] as const
}

export function useGetAnnotationLayerInfo<TError = unknown>(
  args: InferRequestType<typeof client.annotation_layer._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>
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
        ? getGetAnnotationLayerInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotation_layer._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationLayerInfo<TError = unknown>(
  args: InferRequestType<typeof client.annotation_layer._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>
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
        ? getGetAnnotationLayerInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.annotation_layer._info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotation_layer._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationLayerRelatedColumnNameKey(
  args: InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>,
) {
  return ['annotation_layer', '/annotation_layer/related/:column_name', args] as const
}

export function useGetAnnotationLayerRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotation_layer.related)[':column_name']['$get']>>
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
        ? getGetAnnotationLayerRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotation_layer.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.annotation_layer.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationLayerRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.annotation_layer.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotation_layer.related)[':column_name']['$get']>>
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
        ? getGetAnnotationLayerRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotation_layer.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.annotation_layer.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationLayerPkKey(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>,
) {
  return ['annotation_layer', '/annotation_layer/:pk', args] as const
}

export function useGetAnnotationLayerPk<TError = unknown>(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>>
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
        ? getGetAnnotationLayerPkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotation_layer[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationLayerPk<TError = unknown>(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>>
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
        ? getGetAnnotationLayerPkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotation_layer[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAnnotationLayerPkKey() {
  return ['annotation_layer', '/annotation_layer/:pk', 'PUT'] as const
}

export function usePutAnnotationLayerPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.annotation_layer)[':pk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnnotationLayerPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.annotation_layer)[':pk']['$put']> },
      ) => parseResponse(client.annotation_layer[':pk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnnotationLayerPkKey() {
  return ['annotation_layer', '/annotation_layer/:pk', 'DELETE'] as const
}

export function useDeleteAnnotationLayerPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotation_layer)[':pk']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.annotation_layer)[':pk']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnnotationLayerPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.annotation_layer)[':pk']['$delete']> },
      ) => parseResponse(client.annotation_layer[':pk'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnnotationLayerPkAnnotationIndexKey(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>,
) {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/', args] as const
}

export function useGetAnnotationLayerPkAnnotationIndex<TError = unknown>(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>
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
        ? getGetAnnotationLayerPkAnnotationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.annotation_layer[':pk'].annotation.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationLayerPkAnnotationIndex<TError = unknown>(
  args: InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>
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
        ? getGetAnnotationLayerPkAnnotationIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.annotation_layer[':pk'].annotation.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnnotationLayerPkAnnotationIndexKey() {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/', 'POST'] as const
}

export function usePostAnnotationLayerPkAnnotationIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnnotationLayerPkAnnotationIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.annotation_layer)[':pk']['annotation']['index']['$post']
          >
        },
      ) => parseResponse(client.annotation_layer[':pk'].annotation.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnnotationLayerPkAnnotationIndexKey() {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/', 'DELETE'] as const
}

export function useDeleteAnnotationLayerPkAnnotationIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.annotation_layer)[':pk']['annotation']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnnotationLayerPkAnnotationIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.annotation_layer)[':pk']['annotation']['index']['$delete']
          >
        },
      ) =>
        parseResponse(client.annotation_layer[':pk'].annotation.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnnotationLayerPkAnnotationAnnotationIdKey(
  args: InferRequestType<
    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
) {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/:annotation_id', args] as const
}

export function useGetAnnotationLayerPkAnnotationAnnotationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
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
        ? getGetAnnotationLayerPkAnnotationAnnotationIdKey(args)
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
                (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
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
          client.annotation_layer[':pk'].annotation[':annotation_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationLayerPkAnnotationAnnotationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
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
        ? getGetAnnotationLayerPkAnnotationAnnotationIdKey(args)
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
                (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$get']
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
          client.annotation_layer[':pk'].annotation[':annotation_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAnnotationLayerPkAnnotationAnnotationIdKey() {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/:annotation_id', 'PUT'] as const
}

export function usePutAnnotationLayerPkAnnotationAnnotationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnnotationLayerPkAnnotationAnnotationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.annotation_layer[':pk'].annotation[':annotation_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnnotationLayerPkAnnotationAnnotationIdKey() {
  return ['annotation_layer', '/annotation_layer/:pk/annotation/:annotation_id', 'DELETE'] as const
}

export function useDeleteAnnotationLayerPkAnnotationAnnotationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnnotationLayerPkAnnotationAnnotationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.annotation_layer)[':pk']['annotation'][':annotation_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.annotation_layer[':pk'].annotation[':annotation_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAsyncEventIndexKey(
  args: InferRequestType<typeof client.async_event.index.$get>,
) {
  return ['async_event', '/async_event/', args] as const
}

export function useGetAsyncEventIndex<TError = unknown>(
  args: InferRequestType<typeof client.async_event.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>>
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
        ? getGetAsyncEventIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.async_event.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAsyncEventIndex<TError = unknown>(
  args: InferRequestType<typeof client.async_event.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>>
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
        ? getGetAsyncEventIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.async_event.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.async_event.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCachekeyInvalidateKey() {
  return ['cachekey', '/cachekey/invalidate', 'POST'] as const
}

export function usePostCachekeyInvalidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cachekey.invalidate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cachekey.invalidate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCachekeyInvalidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cachekey.invalidate.$post> }) =>
        parseResponse(client.cachekey.invalidate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChartIndexKey(args: InferRequestType<typeof client.chart.index.$get>) {
  return ['chart', '/chart/', args] as const
}

export function useGetChartIndex<TError = unknown>(
  args: InferRequestType<typeof client.chart.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChartIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartIndex<TError = unknown>(
  args: InferRequestType<typeof client.chart.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChartIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChartIndexKey() {
  return ['chart', '/chart/', 'POST'] as const
}

export function usePostChartIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.chart.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChartIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chart.index.$post> }) =>
        parseResponse(client.chart.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChartIndexKey() {
  return ['chart', '/chart/', 'DELETE'] as const
}

export function useDeleteChartIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.index.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chart.index.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChartIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chart.index.$delete> }) =>
        parseResponse(client.chart.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChartInfoKey(args: InferRequestType<typeof client.chart._info.$get>) {
  return ['chart', '/chart/_info', args] as const
}

export function useGetChartInfo<TError = unknown>(
  args: InferRequestType<typeof client.chart._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChartInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartInfo<TError = unknown>(
  args: InferRequestType<typeof client.chart._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChartInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChartDataKey() {
  return ['chart', '/chart/data', 'POST'] as const
}

export function usePostChartData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.data.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.chart.data.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChartDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chart.data.$post> }) =>
        parseResponse(client.chart.data.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChartDataCacheKeyKey(
  args: InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>,
) {
  return ['chart', '/chart/data/:cache_key', args] as const
}

export function useGetChartDataCacheKey<TError = unknown>(
  args: InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>
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
        ? getGetChartDataCacheKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart.data[':cache_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartDataCacheKey<TError = unknown>(
  args: InferRequestType<(typeof client.chart.data)[':cache_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>
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
        ? getGetChartDataCacheKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart.data)[':cache_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart.data[':cache_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChartExportIndexKey(
  args: InferRequestType<typeof client.chart.export.index.$get>,
) {
  return ['chart', '/chart/export/', args] as const
}

export function useGetChartExportIndex<TError = unknown>(
  args: InferRequestType<typeof client.chart.export.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>>
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
        ? getGetChartExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart.export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartExportIndex<TError = unknown>(
  args: InferRequestType<typeof client.chart.export.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>>
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
        ? getGetChartExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.export.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart.export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChartFavoriteStatusIndexKey(
  args: InferRequestType<typeof client.chart.favorite_status.index.$get>,
) {
  return ['chart', '/chart/favorite_status/', args] as const
}

export function useGetChartFavoriteStatusIndex<TError = unknown>(
  args: InferRequestType<typeof client.chart.favorite_status.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>>
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
        ? getGetChartFavoriteStatusIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart.favorite_status.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartFavoriteStatusIndex<TError = unknown>(
  args: InferRequestType<typeof client.chart.favorite_status.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>>
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
        ? getGetChartFavoriteStatusIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.chart.favorite_status.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart.favorite_status.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChartImportIndexKey() {
  return ['chart', '/chart/import/', 'POST'] as const
}

export function usePostChartImportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.import.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chart.import.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChartImportIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chart.import.index.$post> }) =>
        parseResponse(client.chart.import.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChartRelatedColumnNameKey(
  args: InferRequestType<(typeof client.chart.related)[':column_name']['$get']>,
) {
  return ['chart', '/chart/related/:column_name', args] as const
}

export function useGetChartRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.chart.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart.related)[':column_name']['$get']>>
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
        ? getGetChartRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.chart.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart.related)[':column_name']['$get']>>
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
        ? getGetChartRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChartPkKey(args: InferRequestType<(typeof client.chart)[':pk']['$get']>) {
  return ['chart', '/chart/:pk', args] as const
}

export function useGetChartPk<TError = unknown>(
  args: InferRequestType<(typeof client.chart)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChartPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartPk<TError = unknown>(
  args: InferRequestType<(typeof client.chart)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChartPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChartPkKey() {
  return ['chart', '/chart/:pk', 'PUT'] as const
}

export function usePutChartPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.chart)[':pk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChartPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.chart)[':pk']['$put']> }) =>
        parseResponse(client.chart[':pk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChartPkKey() {
  return ['chart', '/chart/:pk', 'DELETE'] as const
}

export function useDeleteChartPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.chart)[':pk']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.chart)[':pk']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChartPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.chart)[':pk']['$delete']> }) =>
        parseResponse(client.chart[':pk'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChartPkCacheScreenshotIndexKey(
  args: InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>,
) {
  return ['chart', '/chart/:pk/cache_screenshot/', args] as const
}

export function useGetChartPkCacheScreenshotIndex<TError = unknown>(
  args: InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>>
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
        ? getGetChartPkCacheScreenshotIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chart[':pk'].cache_screenshot.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartPkCacheScreenshotIndex<TError = unknown>(
  args: InferRequestType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>>
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
        ? getGetChartPkCacheScreenshotIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart)[':pk']['cache_screenshot']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chart[':pk'].cache_screenshot.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChartPkDataIndexKey(
  args: InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>,
) {
  return ['chart', '/chart/:pk/data/', args] as const
}

export function useGetChartPkDataIndex<TError = unknown>(
  args: InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart)[':pk']['data']['index']['$get']>>
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
        ? getGetChartPkDataIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart)[':pk']['data']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart[':pk'].data.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartPkDataIndex<TError = unknown>(
  args: InferRequestType<(typeof client.chart)[':pk']['data']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart)[':pk']['data']['index']['$get']>>
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
        ? getGetChartPkDataIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chart)[':pk']['data']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chart[':pk'].data.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChartPkScreenshotDigestIndexKey(
  args: InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>,
) {
  return ['chart', '/chart/:pk/screenshot/:digest/', args] as const
}

export function useGetChartPkScreenshotDigestIndex<TError = unknown>(
  args: InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>
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
        ? getGetChartPkScreenshotDigestIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chart[':pk'].screenshot[':digest'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartPkScreenshotDigestIndex<TError = unknown>(
  args: InferRequestType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>
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
        ? getGetChartPkScreenshotDigestIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chart)[':pk']['screenshot'][':digest']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chart[':pk'].screenshot[':digest'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChartPkThumbnailDigestIndexKey(
  args: InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>,
) {
  return ['chart', '/chart/:pk/thumbnail/:digest/', args] as const
}

export function useGetChartPkThumbnailDigestIndex<TError = unknown>(
  args: InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
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
        ? getGetChartPkThumbnailDigestIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chart[':pk'].thumbnail[':digest'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChartPkThumbnailDigestIndex<TError = unknown>(
  args: InferRequestType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
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
        ? getGetChartPkThumbnailDigestIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.chart)[':pk']['thumbnail'][':digest']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.chart[':pk'].thumbnail[':digest'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCssTemplateIndexKey(
  args: InferRequestType<typeof client.css_template.index.$get>,
) {
  return ['css_template', '/css_template/', args] as const
}

export function useGetCssTemplateIndex<TError = unknown>(
  args: InferRequestType<typeof client.css_template.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>>
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
        ? getGetCssTemplateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.css_template.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCssTemplateIndex<TError = unknown>(
  args: InferRequestType<typeof client.css_template.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>>
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
        ? getGetCssTemplateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.css_template.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCssTemplateIndexKey() {
  return ['css_template', '/css_template/', 'POST'] as const
}

export function usePostCssTemplateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.css_template.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCssTemplateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.css_template.index.$post> }) =>
        parseResponse(client.css_template.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCssTemplateIndexKey() {
  return ['css_template', '/css_template/', 'DELETE'] as const
}

export function useDeleteCssTemplateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.css_template.index.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.css_template.index.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCssTemplateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.css_template.index.$delete> },
      ) => parseResponse(client.css_template.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCssTemplateInfoKey(
  args: InferRequestType<typeof client.css_template._info.$get>,
) {
  return ['css_template', '/css_template/_info', args] as const
}

export function useGetCssTemplateInfo<TError = unknown>(
  args: InferRequestType<typeof client.css_template._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>>
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
        ? getGetCssTemplateInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.css_template._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCssTemplateInfo<TError = unknown>(
  args: InferRequestType<typeof client.css_template._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>>
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
        ? getGetCssTemplateInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.css_template._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.css_template._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCssTemplateRelatedColumnNameKey(
  args: InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>,
) {
  return ['css_template', '/css_template/related/:column_name', args] as const
}

export function useGetCssTemplateRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.css_template.related)[':column_name']['$get']>>
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
        ? getGetCssTemplateRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.css_template.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.css_template.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCssTemplateRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.css_template.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.css_template.related)[':column_name']['$get']>>
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
        ? getGetCssTemplateRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.css_template.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.css_template.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCssTemplatePkKey(
  args: InferRequestType<(typeof client.css_template)[':pk']['$get']>,
) {
  return ['css_template', '/css_template/:pk', args] as const
}

export function useGetCssTemplatePk<TError = unknown>(
  args: InferRequestType<(typeof client.css_template)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCssTemplatePkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.css_template[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCssTemplatePk<TError = unknown>(
  args: InferRequestType<(typeof client.css_template)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCssTemplatePkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.css_template[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCssTemplatePkKey() {
  return ['css_template', '/css_template/:pk', 'PUT'] as const
}

export function usePutCssTemplatePk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.css_template)[':pk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCssTemplatePkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.css_template)[':pk']['$put']> },
      ) => parseResponse(client.css_template[':pk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCssTemplatePkKey() {
  return ['css_template', '/css_template/:pk', 'DELETE'] as const
}

export function useDeleteCssTemplatePk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.css_template)[':pk']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.css_template)[':pk']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCssTemplatePkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.css_template)[':pk']['$delete']> },
      ) => parseResponse(client.css_template[':pk'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardIndexKey(
  args: InferRequestType<typeof client.dashboard.index.$get>,
) {
  return ['dashboard', '/dashboard/', args] as const
}

export function useGetDashboardIndex<TError = unknown>(
  args: InferRequestType<typeof client.dashboard.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDashboardIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardIndex<TError = unknown>(
  args: InferRequestType<typeof client.dashboard.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDashboardIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardIndexKey() {
  return ['dashboard', '/dashboard/', 'POST'] as const
}

export function usePostDashboardIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dashboard.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dashboard.index.$post> }) =>
        parseResponse(client.dashboard.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDashboardIndexKey() {
  return ['dashboard', '/dashboard/', 'DELETE'] as const
}

export function useDeleteDashboardIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.index.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dashboard.index.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDashboardIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dashboard.index.$delete> }) =>
        parseResponse(client.dashboard.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardInfoKey(args: InferRequestType<typeof client.dashboard._info.$get>) {
  return ['dashboard', '/dashboard/_info', args] as const
}

export function useGetDashboardInfo<TError = unknown>(
  args: InferRequestType<typeof client.dashboard._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDashboardInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardInfo<TError = unknown>(
  args: InferRequestType<typeof client.dashboard._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDashboardInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDashboardExportIndexKey(
  args: InferRequestType<typeof client.dashboard.export.index.$get>,
) {
  return ['dashboard', '/dashboard/export/', args] as const
}

export function useGetDashboardExportIndex<TError = unknown>(
  args: InferRequestType<typeof client.dashboard.export.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>
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
        ? getGetDashboardExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard.export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardExportIndex<TError = unknown>(
  args: InferRequestType<typeof client.dashboard.export.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>
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
        ? getGetDashboardExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.export.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard.export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDashboardFavoriteStatusIndexKey(
  args: InferRequestType<typeof client.dashboard.favorite_status.index.$get>,
) {
  return ['dashboard', '/dashboard/favorite_status/', args] as const
}

export function useGetDashboardFavoriteStatusIndex<TError = unknown>(
  args: InferRequestType<typeof client.dashboard.favorite_status.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>
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
        ? getGetDashboardFavoriteStatusIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard.favorite_status.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardFavoriteStatusIndex<TError = unknown>(
  args: InferRequestType<typeof client.dashboard.favorite_status.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>
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
        ? getGetDashboardFavoriteStatusIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.dashboard.favorite_status.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard.favorite_status.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardImportIndexKey() {
  return ['dashboard', '/dashboard/import/', 'POST'] as const
}

export function usePostDashboardImportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.import.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.dashboard.import.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardImportIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.dashboard.import.index.$post> },
      ) => parseResponse(client.dashboard.import.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardRelatedColumnNameKey(
  args: InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>,
) {
  return ['dashboard', '/dashboard/related/:column_name', args] as const
}

export function useGetDashboardRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard.related)[':column_name']['$get']>>
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
        ? getGetDashboardRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.dashboard.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard.related)[':column_name']['$get']>>
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
        ? getGetDashboardRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDashboardIdOrSlugKey(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>,
) {
  return ['dashboard', '/dashboard/:id_or_slug', args] as const
}

export function useGetDashboardIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>
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
        ? getGetDashboardIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard[':id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>
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
        ? getGetDashboardIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard[':id_or_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDashboardIdOrSlugChartsKey(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>,
) {
  return ['dashboard', '/dashboard/:id_or_slug/charts', args] as const
}

export function useGetDashboardIdOrSlugCharts<TError = unknown>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>>
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
        ? getGetDashboardIdOrSlugChartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard[':id_or_slug'].charts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardIdOrSlugCharts<TError = unknown>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>>
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
        ? getGetDashboardIdOrSlugChartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['charts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard[':id_or_slug'].charts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDashboardIdOrSlugDatasetsKey(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>,
) {
  return ['dashboard', '/dashboard/:id_or_slug/datasets', args] as const
}

export function useGetDashboardIdOrSlugDatasets<TError = unknown>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>>
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
        ? getGetDashboardIdOrSlugDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard[':id_or_slug'].datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardIdOrSlugDatasets<TError = unknown>(
  args: InferRequestType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>>
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
        ? getGetDashboardIdOrSlugDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboard)[':id_or_slug']['datasets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard[':id_or_slug'].datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDashboardPkKey() {
  return ['dashboard', '/dashboard/:pk', 'PUT'] as const
}

export function usePutDashboardPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':pk']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboard)[':pk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDashboardPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dashboard)[':pk']['$put']> },
      ) => parseResponse(client.dashboard[':pk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDashboardPkKey() {
  return ['dashboard', '/dashboard/:pk', 'DELETE'] as const
}

export function useDeleteDashboardPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dashboard)[':pk']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboard)[':pk']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDashboardPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dashboard)[':pk']['$delete']> },
      ) => parseResponse(client.dashboard[':pk'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardPkThumbnailDigestIndexKey(
  args: InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>,
) {
  return ['dashboard', '/dashboard/:pk/thumbnail/:digest/', args] as const
}

export function useGetDashboardPkThumbnailDigestIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>
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
        ? getGetDashboardPkThumbnailDigestIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dashboard[':pk'].thumbnail[':digest'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardPkThumbnailDigestIndex<TError = unknown>(
  args: InferRequestType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>
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
        ? getGetDashboardPkThumbnailDigestIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dashboard)[':pk']['thumbnail'][':digest']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dashboard[':pk'].thumbnail[':digest'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabaseIndexKey(args: InferRequestType<typeof client.database.index.$get>) {
  return ['database', '/database/', args] as const
}

export function useGetDatabaseIndex<TError = unknown>(
  args: InferRequestType<typeof client.database.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatabaseIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabaseIndex<TError = unknown>(
  args: InferRequestType<typeof client.database.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatabaseIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatabaseIndexKey() {
  return ['database', '/database/', 'POST'] as const
}

export function usePostDatabaseIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.database.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabaseIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.database.index.$post> }) =>
        parseResponse(client.database.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatabaseInfoKey(args: InferRequestType<typeof client.database._info.$get>) {
  return ['database', '/database/_info', args] as const
}

export function useGetDatabaseInfo<TError = unknown>(
  args: InferRequestType<typeof client.database._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatabaseInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabaseInfo<TError = unknown>(
  args: InferRequestType<typeof client.database._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatabaseInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.database._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabaseAvailableIndexKey() {
  return ['database', '/database/available/'] as const
}

export function useGetDatabaseAvailableIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabaseAvailableIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database.available.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabaseAvailableIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatabaseAvailableIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.database.available.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database.available.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabaseExportIndexKey(
  args: InferRequestType<typeof client.database.export.index.$get>,
) {
  return ['database', '/database/export/', args] as const
}

export function useGetDatabaseExportIndex<TError = unknown>(
  args: InferRequestType<typeof client.database.export.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>
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
        ? getGetDatabaseExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database.export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabaseExportIndex<TError = unknown>(
  args: InferRequestType<typeof client.database.export.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>
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
        ? getGetDatabaseExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.database.export.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database.export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatabaseImportIndexKey() {
  return ['database', '/database/import/', 'POST'] as const
}

export function usePostDatabaseImportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.import.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.database.import.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabaseImportIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.database.import.index.$post> },
      ) => parseResponse(client.database.import.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatabaseTestConnectionKey() {
  return ['database', '/database/test_connection', 'POST'] as const
}

export function usePostDatabaseTestConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.test_connection.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.database.test_connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabaseTestConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.database.test_connection.$post> },
      ) => parseResponse(client.database.test_connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatabaseValidateParametersKey() {
  return ['database', '/database/validate_parameters', 'POST'] as const
}

export function usePostDatabaseValidateParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.database.validate_parameters.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.database.validate_parameters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatabaseValidateParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.database.validate_parameters.$post> },
      ) => parseResponse(client.database.validate_parameters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasePkKey(
  args: InferRequestType<(typeof client.database)[':pk']['$get']>,
) {
  return ['database', '/database/:pk', args] as const
}

export function useGetDatabasePk<TError = unknown>(
  args: InferRequestType<(typeof client.database)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDatabasePkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasePk<TError = unknown>(
  args: InferRequestType<(typeof client.database)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDatabasePkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatabasePkKey() {
  return ['database', '/database/:pk', 'PUT'] as const
}

export function usePutDatabasePk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.database)[':pk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatabasePkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.database)[':pk']['$put']> }) =>
        parseResponse(client.database[':pk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatabasePkKey() {
  return ['database', '/database/:pk', 'DELETE'] as const
}

export function useDeleteDatabasePk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.database)[':pk']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.database)[':pk']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatabasePkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.database)[':pk']['$delete']> },
      ) => parseResponse(client.database[':pk'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatabasePkFunctionNamesIndexKey(
  args: InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>,
) {
  return ['database', '/database/:pk/function_names/', args] as const
}

export function useGetDatabasePkFunctionNamesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['function_names']['index']['$get']>>
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
        ? getGetDatabasePkFunctionNamesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['function_names']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.database[':pk'].function_names.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasePkFunctionNamesIndex<TError = unknown>(
  args: InferRequestType<(typeof client.database)[':pk']['function_names']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['function_names']['index']['$get']>>
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
        ? getGetDatabasePkFunctionNamesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['function_names']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.database[':pk'].function_names.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasePkRelatedObjectsIndexKey(
  args: InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>,
) {
  return ['database', '/database/:pk/related_objects/', args] as const
}

export function useGetDatabasePkRelatedObjectsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['related_objects']['index']['$get']>>
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
        ? getGetDatabasePkRelatedObjectsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['related_objects']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.database[':pk'].related_objects.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasePkRelatedObjectsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.database)[':pk']['related_objects']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['related_objects']['index']['$get']>>
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
        ? getGetDatabasePkRelatedObjectsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['related_objects']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.database[':pk'].related_objects.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasePkSchemasIndexKey(
  args: InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>,
) {
  return ['database', '/database/:pk/schemas/', args] as const
}

export function useGetDatabasePkSchemasIndex<TError = unknown>(
  args: InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['schemas']['index']['$get']>>
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
        ? getGetDatabasePkSchemasIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['schemas']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database[':pk'].schemas.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasePkSchemasIndex<TError = unknown>(
  args: InferRequestType<(typeof client.database)[':pk']['schemas']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['schemas']['index']['$get']>>
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
        ? getGetDatabasePkSchemasIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.database)[':pk']['schemas']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.database[':pk'].schemas.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasePkSelectStarTableNameIndexKey(
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
) {
  return ['database', '/database/:pk/select_star/:table_name/', args] as const
}

export function useGetDatabasePkSelectStarTableNameIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
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
        ? getGetDatabasePkSelectStarTableNameIndexKey(args)
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
                (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
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
          client.database[':pk'].select_star[':table_name'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasePkSelectStarTableNameIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
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
        ? getGetDatabasePkSelectStarTableNameIndexKey(args)
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
                (typeof client.database)[':pk']['select_star'][':table_name']['index']['$get']
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
          client.database[':pk'].select_star[':table_name'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasePkSelectStarTableNameSchemaNameIndexKey(
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
) {
  return ['database', '/database/:pk/select_star/:table_name/:schema_name/', args] as const
}

export function useGetDatabasePkSelectStarTableNameSchemaNameIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
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
        ? getGetDatabasePkSelectStarTableNameSchemaNameIndexKey(args)
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
                (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
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
          client.database[':pk'].select_star[':table_name'][':schema_name'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasePkSelectStarTableNameSchemaNameIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
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
        ? getGetDatabasePkSelectStarTableNameSchemaNameIndexKey(args)
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
                (typeof client.database)[':pk']['select_star'][':table_name'][':schema_name']['index']['$get']
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
          client.database[':pk'].select_star[':table_name'][':schema_name'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDatabasePkTableTableNameSchemaNameIndexKey(
  args: InferRequestType<
    (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
) {
  return ['database', '/database/:pk/table/:table_name/:schema_name/', args] as const
}

export function useGetDatabasePkTableTableNameSchemaNameIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
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
        ? getGetDatabasePkTableTableNameSchemaNameIndexKey(args)
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
                (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
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
          client.database[':pk'].table[':table_name'][':schema_name'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatabasePkTableTableNameSchemaNameIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
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
        ? getGetDatabasePkTableTableNameSchemaNameIndexKey(args)
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
                (typeof client.database)[':pk']['table'][':table_name'][':schema_name']['index']['$get']
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
          client.database[':pk'].table[':table_name'][':schema_name'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDatasetIndexKey(args: InferRequestType<typeof client.dataset.index.$get>) {
  return ['dataset', '/dataset/', args] as const
}

export function useGetDatasetIndex<TError = unknown>(
  args: InferRequestType<typeof client.dataset.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasetIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetIndex<TError = unknown>(
  args: InferRequestType<typeof client.dataset.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasetIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatasetIndexKey() {
  return ['dataset', '/dataset/', 'POST'] as const
}

export function usePostDatasetIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dataset.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasetIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dataset.index.$post> }) =>
        parseResponse(client.dataset.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasetIndexKey() {
  return ['dataset', '/dataset/', 'DELETE'] as const
}

export function useDeleteDatasetIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset.index.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dataset.index.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasetIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dataset.index.$delete> }) =>
        parseResponse(client.dataset.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetInfoKey(args: InferRequestType<typeof client.dataset._info.$get>) {
  return ['dataset', '/dataset/_info', args] as const
}

export function useGetDatasetInfo<TError = unknown>(
  args: InferRequestType<typeof client.dataset._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasetInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetInfo<TError = unknown>(
  args: InferRequestType<typeof client.dataset._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasetInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dataset._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatasetDistinctColumnNameKey(
  args: InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>,
) {
  return ['dataset', '/dataset/distinct/:column_name', args] as const
}

export function useGetDatasetDistinctColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset.distinct)[':column_name']['$get']>>
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
        ? getGetDatasetDistinctColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset.distinct)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset.distinct[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetDistinctColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.dataset.distinct)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset.distinct)[':column_name']['$get']>>
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
        ? getGetDatasetDistinctColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset.distinct)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset.distinct[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatasetExportIndexKey(
  args: InferRequestType<typeof client.dataset.export.index.$get>,
) {
  return ['dataset', '/dataset/export/', args] as const
}

export function useGetDatasetExportIndex<TError = unknown>(
  args: InferRequestType<typeof client.dataset.export.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>
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
        ? getGetDatasetExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset.export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetExportIndex<TError = unknown>(
  args: InferRequestType<typeof client.dataset.export.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>
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
        ? getGetDatasetExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dataset.export.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset.export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatasetImportIndexKey() {
  return ['dataset', '/dataset/import/', 'POST'] as const
}

export function usePostDatasetImportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dataset.import.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.dataset.import.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasetImportIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.dataset.import.index.$post> },
      ) => parseResponse(client.dataset.import.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetRelatedColumnNameKey(
  args: InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>,
) {
  return ['dataset', '/dataset/related/:column_name', args] as const
}

export function useGetDatasetRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset.related)[':column_name']['$get']>>
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
        ? getGetDatasetRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.dataset.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset.related)[':column_name']['$get']>>
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
        ? getGetDatasetRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatasetPkKey(args: InferRequestType<(typeof client.dataset)[':pk']['$get']>) {
  return ['dataset', '/dataset/:pk', args] as const
}

export function useGetDatasetPk<TError = unknown>(
  args: InferRequestType<(typeof client.dataset)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDatasetPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetPk<TError = unknown>(
  args: InferRequestType<(typeof client.dataset)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDatasetPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatasetPkKey() {
  return ['dataset', '/dataset/:pk', 'PUT'] as const
}

export function usePutDatasetPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dataset)[':pk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatasetPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.dataset)[':pk']['$put']> }) =>
        parseResponse(client.dataset[':pk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasetPkKey() {
  return ['dataset', '/dataset/:pk', 'DELETE'] as const
}

export function useDeleteDatasetPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dataset)[':pk']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasetPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dataset)[':pk']['$delete']> },
      ) => parseResponse(client.dataset[':pk'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasetPkColumnColumnIdKey() {
  return ['dataset', '/dataset/:pk/column/:column_id', 'DELETE'] as const
}

export function useDeleteDatasetPkColumnColumnId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dataset)[':pk']['column'][':column_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dataset)[':pk']['column'][':column_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasetPkColumnColumnIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dataset)[':pk']['column'][':column_id']['$delete']>
        },
      ) => parseResponse(client.dataset[':pk'].column[':column_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasetPkMetricMetricIdKey() {
  return ['dataset', '/dataset/:pk/metric/:metric_id', 'DELETE'] as const
}

export function useDeleteDatasetPkMetricMetricId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dataset)[':pk']['metric'][':metric_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dataset)[':pk']['metric'][':metric_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasetPkMetricMetricIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dataset)[':pk']['metric'][':metric_id']['$delete']>
        },
      ) => parseResponse(client.dataset[':pk'].metric[':metric_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDatasetPkRefreshKey() {
  return ['dataset', '/dataset/:pk/refresh', 'PUT'] as const
}

export function usePutDatasetPkRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dataset)[':pk']['refresh']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dataset)[':pk']['refresh']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatasetPkRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dataset)[':pk']['refresh']['$put']> },
      ) => parseResponse(client.dataset[':pk'].refresh.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetPkRelatedObjectsKey(
  args: InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>,
) {
  return ['dataset', '/dataset/:pk/related_objects', args] as const
}

export function useGetDatasetPkRelatedObjects<TError = unknown>(
  args: InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset)[':pk']['related_objects']['$get']>>
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
        ? getGetDatasetPkRelatedObjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset)[':pk']['related_objects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset[':pk'].related_objects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetPkRelatedObjects<TError = unknown>(
  args: InferRequestType<(typeof client.dataset)[':pk']['related_objects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset)[':pk']['related_objects']['$get']>>
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
        ? getGetDatasetPkRelatedObjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dataset)[':pk']['related_objects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dataset[':pk'].related_objects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogIndexKey(args: InferRequestType<typeof client.log.index.$get>) {
  return ['log', '/log/', args] as const
}

export function useGetLogIndex<TError = unknown>(
  args: InferRequestType<typeof client.log.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.log.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogIndex<TError = unknown>(
  args: InferRequestType<typeof client.log.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.log.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLogIndexKey() {
  return ['log', '/log/', 'POST'] as const
}

export function usePostLogIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.log.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.log.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLogIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.log.index.$post> }) =>
        parseResponse(client.log.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogPkKey(args: InferRequestType<(typeof client.log)[':pk']['$get']>) {
  return ['log', '/log/:pk', args] as const
}

export function useGetLogPk<TError = unknown>(
  args: InferRequestType<(typeof client.log)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.log[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogPk<TError = unknown>(
  args: InferRequestType<(typeof client.log)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.log)[':pk']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.log[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMenuIndexKey() {
  return ['menu', '/menu/'] as const
}

export function useGetMenuIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMenuIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.menu.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMenuIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMenuIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.menu.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.menu.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOpenapiVersionOpenapiKey(
  args: InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>,
) {
  return ['openapi', '/openapi/:version/_openapi', args] as const
}

export function useGetOpenapiVersionOpenapi<TError = unknown>(
  args: InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.openapi)[':version']['_openapi']['$get']>>
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
        ? getGetOpenapiVersionOpenapiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.openapi)[':version']['_openapi']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openapi[':version']._openapi.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenapiVersionOpenapi<TError = unknown>(
  args: InferRequestType<(typeof client.openapi)[':version']['_openapi']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.openapi)[':version']['_openapi']['$get']>>
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
        ? getGetOpenapiVersionOpenapiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.openapi)[':version']['_openapi']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openapi[':version']._openapi.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueryIndexKey(args: InferRequestType<typeof client.query.index.$get>) {
  return ['query', '/query/', args] as const
}

export function useGetQueryIndex<TError = unknown>(
  args: InferRequestType<typeof client.query.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryIndex<TError = unknown>(
  args: InferRequestType<typeof client.query.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueryDistinctColumnNameKey(
  args: InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>,
) {
  return ['query', '/query/distinct/:column_name', args] as const
}

export function useGetQueryDistinctColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.distinct)[':column_name']['$get']>>
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
        ? getGetQueryDistinctColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.distinct)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.distinct[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryDistinctColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.query.distinct)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.distinct)[':column_name']['$get']>>
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
        ? getGetQueryDistinctColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.distinct)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.distinct[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueryRelatedColumnNameKey(
  args: InferRequestType<(typeof client.query.related)[':column_name']['$get']>,
) {
  return ['query', '/query/related/:column_name', args] as const
}

export function useGetQueryRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.query.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.related)[':column_name']['$get']>>
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
        ? getGetQueryRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.query.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.related)[':column_name']['$get']>>
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
        ? getGetQueryRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.query.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueryPkKey(args: InferRequestType<(typeof client.query)[':pk']['$get']>) {
  return ['query', '/query/:pk', args] as const
}

export function useGetQueryPk<TError = unknown>(
  args: InferRequestType<(typeof client.query)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryPk<TError = unknown>(
  args: InferRequestType<(typeof client.query)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':pk']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportIndexKey(args: InferRequestType<typeof client.report.index.$get>) {
  return ['report', '/report/', args] as const
}

export function useGetReportIndex<TError = unknown>(
  args: InferRequestType<typeof client.report.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportIndex<TError = unknown>(
  args: InferRequestType<typeof client.report.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportIndexKey() {
  return ['report', '/report/', 'POST'] as const
}

export function usePostReportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.report.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.report.index.$post> }) =>
        parseResponse(client.report.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReportIndexKey() {
  return ['report', '/report/', 'DELETE'] as const
}

export function useDeleteReportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.index.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.report.index.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReportIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.report.index.$delete> }) =>
        parseResponse(client.report.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportInfoKey(args: InferRequestType<typeof client.report._info.$get>) {
  return ['report', '/report/_info', args] as const
}

export function useGetReportInfo<TError = unknown>(
  args: InferRequestType<typeof client.report._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportInfo<TError = unknown>(
  args: InferRequestType<typeof client.report._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportRelatedColumnNameKey(
  args: InferRequestType<(typeof client.report.related)[':column_name']['$get']>,
) {
  return ['report', '/report/related/:column_name', args] as const
}

export function useGetReportRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.report.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.related)[':column_name']['$get']>>
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
        ? getGetReportRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.report.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.related)[':column_name']['$get']>>
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
        ? getGetReportRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportPkKey(args: InferRequestType<(typeof client.report)[':pk']['$get']>) {
  return ['report', '/report/:pk', args] as const
}

export function useGetReportPk<TError = unknown>(
  args: InferRequestType<(typeof client.report)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPk<TError = unknown>(
  args: InferRequestType<(typeof client.report)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutReportPkKey() {
  return ['report', '/report/:pk', 'PUT'] as const
}

export function usePutReportPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.report)[':pk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReportPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.report)[':pk']['$put']> }) =>
        parseResponse(client.report[':pk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReportPkKey() {
  return ['report', '/report/:pk', 'DELETE'] as const
}

export function useDeleteReportPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.report)[':pk']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.report)[':pk']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReportPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.report)[':pk']['$delete']> },
      ) => parseResponse(client.report[':pk'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportPkLogIndexKey(
  args: InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>,
) {
  return ['report', '/report/:pk/log/', args] as const
}

export function useGetReportPkLogIndex<TError = unknown>(
  args: InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)[':pk']['log']['index']['$get']>>
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
        ? getGetReportPkLogIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)[':pk']['log']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report[':pk'].log.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPkLogIndex<TError = unknown>(
  args: InferRequestType<(typeof client.report)[':pk']['log']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)[':pk']['log']['index']['$get']>>
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
        ? getGetReportPkLogIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)[':pk']['log']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report[':pk'].log.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportPkLogLogIdKey(
  args: InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>,
) {
  return ['report', '/report/:pk/log/:log_id', args] as const
}

export function useGetReportPkLogLogId<TError = unknown>(
  args: InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>
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
        ? getGetReportPkLogLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report[':pk'].log[':log_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportPkLogLogId<TError = unknown>(
  args: InferRequestType<(typeof client.report)[':pk']['log'][':log_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>
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
        ? getGetReportPkLogLogIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.report)[':pk']['log'][':log_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report[':pk'].log[':log_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSavedQueryIndexKey(
  args: InferRequestType<typeof client.saved_query.index.$get>,
) {
  return ['saved_query', '/saved_query/', args] as const
}

export function useGetSavedQueryIndex<TError = unknown>(
  args: InferRequestType<typeof client.saved_query.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>>
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
        ? getGetSavedQueryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saved_query.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSavedQueryIndex<TError = unknown>(
  args: InferRequestType<typeof client.saved_query.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>>
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
        ? getGetSavedQueryIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saved_query.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSavedQueryIndexKey() {
  return ['saved_query', '/saved_query/', 'POST'] as const
}

export function usePostSavedQueryIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.saved_query.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSavedQueryIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.saved_query.index.$post> }) =>
        parseResponse(client.saved_query.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSavedQueryIndexKey() {
  return ['saved_query', '/saved_query/', 'DELETE'] as const
}

export function useDeleteSavedQueryIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.index.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.saved_query.index.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSavedQueryIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.saved_query.index.$delete> }) =>
        parseResponse(client.saved_query.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSavedQueryInfoKey(
  args: InferRequestType<typeof client.saved_query._info.$get>,
) {
  return ['saved_query', '/saved_query/_info', args] as const
}

export function useGetSavedQueryInfo<TError = unknown>(
  args: InferRequestType<typeof client.saved_query._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSavedQueryInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saved_query._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSavedQueryInfo<TError = unknown>(
  args: InferRequestType<typeof client.saved_query._info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSavedQueryInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saved_query._info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saved_query._info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSavedQueryDistinctColumnNameKey(
  args: InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>,
) {
  return ['saved_query', '/saved_query/distinct/:column_name', args] as const
}

export function useGetSavedQueryDistinctColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saved_query.distinct)[':column_name']['$get']>>
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
        ? getGetSavedQueryDistinctColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saved_query.distinct)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.saved_query.distinct[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSavedQueryDistinctColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.saved_query.distinct)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saved_query.distinct)[':column_name']['$get']>>
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
        ? getGetSavedQueryDistinctColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saved_query.distinct)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.saved_query.distinct[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSavedQueryExportIndexKey(
  args: InferRequestType<typeof client.saved_query.export.index.$get>,
) {
  return ['saved_query', '/saved_query/export/', args] as const
}

export function useGetSavedQueryExportIndex<TError = unknown>(
  args: InferRequestType<typeof client.saved_query.export.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
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
        ? getGetSavedQueryExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saved_query.export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSavedQueryExportIndex<TError = unknown>(
  args: InferRequestType<typeof client.saved_query.export.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
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
        ? getGetSavedQueryExportIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.export.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saved_query.export.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSavedQueryImportIndexKey() {
  return ['saved_query', '/saved_query/import/', 'POST'] as const
}

export function usePostSavedQueryImportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.saved_query.import.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.saved_query.import.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSavedQueryImportIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.saved_query.import.index.$post> },
      ) => parseResponse(client.saved_query.import.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSavedQueryRelatedColumnNameKey(
  args: InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>,
) {
  return ['saved_query', '/saved_query/related/:column_name', args] as const
}

export function useGetSavedQueryRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saved_query.related)[':column_name']['$get']>>
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
        ? getGetSavedQueryRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saved_query.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.saved_query.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSavedQueryRelatedColumnName<TError = unknown>(
  args: InferRequestType<(typeof client.saved_query.related)[':column_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saved_query.related)[':column_name']['$get']>>
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
        ? getGetSavedQueryRelatedColumnNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.saved_query.related)[':column_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.saved_query.related[':column_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSavedQueryPkKey(
  args: InferRequestType<(typeof client.saved_query)[':pk']['$get']>,
) {
  return ['saved_query', '/saved_query/:pk', args] as const
}

export function useGetSavedQueryPk<TError = unknown>(
  args: InferRequestType<(typeof client.saved_query)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSavedQueryPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saved_query[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSavedQueryPk<TError = unknown>(
  args: InferRequestType<(typeof client.saved_query)[':pk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSavedQueryPkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saved_query[':pk'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSavedQueryPkKey() {
  return ['saved_query', '/saved_query/:pk', 'PUT'] as const
}

export function usePutSavedQueryPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.saved_query)[':pk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSavedQueryPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.saved_query)[':pk']['$put']> },
      ) => parseResponse(client.saved_query[':pk'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSavedQueryPkKey() {
  return ['saved_query', '/saved_query/:pk', 'DELETE'] as const
}

export function useDeleteSavedQueryPk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.saved_query)[':pk']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.saved_query)[':pk']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSavedQueryPkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.saved_query)[':pk']['$delete']> },
      ) => parseResponse(client.saved_query[':pk'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecurityCsrfTokenIndexKey() {
  return ['security', '/security/csrf_token/'] as const
}

export function useGetSecurityCsrfTokenIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityCsrfTokenIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.security.csrf_token.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecurityCsrfTokenIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSecurityCsrfTokenIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.security.csrf_token.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.security.csrf_token.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSecurityLoginKey() {
  return ['security', '/security/login', 'POST'] as const
}

export function usePostSecurityLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.security.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.security.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecurityLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.security.login.$post> }) =>
        parseResponse(client.security.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSecurityRefreshKey() {
  return ['security', '/security/refresh', 'POST'] as const
}

export function usePostSecurityRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.security.refresh.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecurityRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.security.refresh.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}
