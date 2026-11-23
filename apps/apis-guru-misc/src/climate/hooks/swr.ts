import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV4Key() {
  return ['v4'] as const
}

export function getPostV4BoundariesKey() {
  return ['v4', '/v4/boundaries', 'POST'] as const
}

export function usePostV4Boundaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.boundaries.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.boundaries.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4BoundariesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.boundaries.$post> }) =>
        parseResponse(client.v4.boundaries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4BoundariesQueryKey() {
  return ['v4', '/v4/boundaries/query', 'POST'] as const
}

export function usePostV4BoundariesQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.boundaries.query.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.boundaries.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4BoundariesQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.boundaries.query.$post> }) =>
        parseResponse(client.v4.boundaries.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4BoundariesBoundaryIdKey(
  args: InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>,
) {
  return ['v4', '/v4/boundaries/:boundaryId', args] as const
}

export function useGetV4BoundariesBoundaryId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
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
        ? getGetV4BoundariesBoundaryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.boundaries[':boundaryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4BoundariesBoundaryId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.boundaries)[':boundaryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
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
        ? getGetV4BoundariesBoundaryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.boundaries)[':boundaryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.boundaries[':boundaryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4ExportsKey() {
  return ['v4', '/v4/exports', 'POST'] as const
}

export function usePostV4Exports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.exports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v4.exports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.exports.$post> }) =>
        parseResponse(client.v4.exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ExportsExportIdContentsKey(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/exports/:exportId/contents', keyArgs] as const
}

export function useGetV4ExportsExportIdContents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
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
        ? getGetV4ExportsExportIdContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.exports[':exportId'].contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ExportsExportIdContents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
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
        ? getGetV4ExportsExportIdContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['contents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.exports[':exportId'].contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ExportsExportIdStatusKey(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>,
) {
  return ['v4', '/v4/exports/:exportId/status', args] as const
}

export function useGetV4ExportsExportIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
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
        ? getGetV4ExportsExportIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.exports[':exportId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ExportsExportIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v4.exports)[':exportId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
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
        ? getGetV4ExportsExportIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.exports)[':exportId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.exports[':exportId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdKey(
  args: InferRequestType<
    (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
  >,
) {
  return ['v4', '/v4/farmOrganizations/:farmOrganizationType/:farmOrganizationId', args] as const
}

export function useGetV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
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
        ? getGetV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdKey(args)
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
                (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
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
          client.v4.farmOrganizations[':farmOrganizationType'][':farmOrganizationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
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
        ? getGetV4FarmOrganizationsFarmOrganizationTypeFarmOrganizationIdKey(args)
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
                (typeof client.v4.farmOrganizations)[':farmOrganizationType'][':farmOrganizationId']['$get']
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
          client.v4.farmOrganizations[':farmOrganizationType'][':farmOrganizationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4FieldsKey(args: InferRequestType<typeof client.v4.fields.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/fields', keyArgs] as const
}

export function useGetV4Fields<TError = unknown>(
  args: InferRequestType<typeof client.v4.fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4FieldsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4Fields<TError = unknown>(
  args: InferRequestType<typeof client.v4.fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4FieldsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4FieldsAllKey(args: InferRequestType<typeof client.v4.fields.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/fields/all', keyArgs] as const
}

export function useGetV4FieldsAll<TError = unknown>(
  args: InferRequestType<typeof client.v4.fields.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4FieldsAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.fields.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4FieldsAll<TError = unknown>(
  args: InferRequestType<typeof client.v4.fields.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4FieldsAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.fields.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.fields.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4FieldsFieldIdKey(
  args: InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>,
) {
  return ['v4', '/v4/fields/:fieldId', args] as const
}

export function useGetV4FieldsFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
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
        ? getGetV4FieldsFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.fields[':fieldId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4FieldsFieldId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.fields)[':fieldId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
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
        ? getGetV4FieldsFieldIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.fields)[':fieldId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.fields[':fieldId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4LayersAsAppliedKey(
  args: InferRequestType<typeof client.v4.layers.asApplied.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asApplied', keyArgs] as const
}

export function useGetV4LayersAsApplied<TError = unknown>(
  args: InferRequestType<typeof client.v4.layers.asApplied.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>
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
        ? getGetV4LayersAsAppliedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.layers.asApplied.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4LayersAsApplied<TError = unknown>(
  args: InferRequestType<typeof client.v4.layers.asApplied.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>
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
        ? getGetV4LayersAsAppliedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asApplied.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.layers.asApplied.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4LayersAsAppliedActivityIdContentsKey(
  args: InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asApplied/:activityId/contents', keyArgs] as const
}

export function useGetV4LayersAsAppliedActivityIdContents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
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
        ? getGetV4LayersAsAppliedActivityIdContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.layers.asApplied[':activityId'].contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4LayersAsAppliedActivityIdContents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
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
        ? getGetV4LayersAsAppliedActivityIdContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asApplied)[':activityId']['contents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.layers.asApplied[':activityId'].contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4LayersAsHarvestedKey(
  args: InferRequestType<typeof client.v4.layers.asHarvested.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asHarvested', keyArgs] as const
}

export function useGetV4LayersAsHarvested<TError = unknown>(
  args: InferRequestType<typeof client.v4.layers.asHarvested.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>
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
        ? getGetV4LayersAsHarvestedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.layers.asHarvested.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4LayersAsHarvested<TError = unknown>(
  args: InferRequestType<typeof client.v4.layers.asHarvested.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>
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
        ? getGetV4LayersAsHarvestedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asHarvested.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.layers.asHarvested.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4LayersAsHarvestedActivityIdContentsKey(
  args: InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asHarvested/:activityId/contents', keyArgs] as const
}

export function useGetV4LayersAsHarvestedActivityIdContents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
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
        ? getGetV4LayersAsHarvestedActivityIdContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.layers.asHarvested[':activityId'].contents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4LayersAsHarvestedActivityIdContents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
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
        ? getGetV4LayersAsHarvestedActivityIdContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asHarvested)[':activityId']['contents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.layers.asHarvested[':activityId'].contents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4LayersAsPlantedKey(
  args: InferRequestType<typeof client.v4.layers.asPlanted.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asPlanted', keyArgs] as const
}

export function useGetV4LayersAsPlanted<TError = unknown>(
  args: InferRequestType<typeof client.v4.layers.asPlanted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>
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
        ? getGetV4LayersAsPlantedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.layers.asPlanted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4LayersAsPlanted<TError = unknown>(
  args: InferRequestType<typeof client.v4.layers.asPlanted.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>
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
        ? getGetV4LayersAsPlantedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.layers.asPlanted.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.layers.asPlanted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4LayersAsPlantedActivityIdContentsKey(
  args: InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/asPlanted/:activityId/contents', keyArgs] as const
}

export function useGetV4LayersAsPlantedActivityIdContents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
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
        ? getGetV4LayersAsPlantedActivityIdContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.layers.asPlanted[':activityId'].contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4LayersAsPlantedActivityIdContents<TError = unknown>(
  args: InferRequestType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
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
        ? getGetV4LayersAsPlantedActivityIdContentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.layers.asPlanted)[':activityId']['contents']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.layers.asPlanted[':activityId'].contents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4LayersScoutingObservationsKey(
  args: InferRequestType<typeof client.v4.layers.scoutingObservations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/layers/scoutingObservations', keyArgs] as const
}

export function useGetV4LayersScoutingObservations<TError = unknown>(
  args: InferRequestType<typeof client.v4.layers.scoutingObservations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>
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
        ? getGetV4LayersScoutingObservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.layers.scoutingObservations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4LayersScoutingObservations<TError = unknown>(
  args: InferRequestType<typeof client.v4.layers.scoutingObservations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>
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
        ? getGetV4LayersScoutingObservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.layers.scoutingObservations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.layers.scoutingObservations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4LayersScoutingObservationsScoutingObservationIdKey(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
  >,
) {
  return ['v4', '/v4/layers/scoutingObservations/:scoutingObservationId', args] as const
}

export function useGetV4LayersScoutingObservationsScoutingObservationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
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
        ? getGetV4LayersScoutingObservationsScoutingObservationIdKey(args)
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
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
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
          client.v4.layers.scoutingObservations[':scoutingObservationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4LayersScoutingObservationsScoutingObservationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
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
        ? getGetV4LayersScoutingObservationsScoutingObservationIdKey(args)
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
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['$get']
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
          client.v4.layers.scoutingObservations[':scoutingObservationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4LayersScoutingObservationsScoutingObservationIdAttachmentsKey(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v4',
    '/v4/layers/scoutingObservations/:scoutingObservationId/attachments',
    keyArgs,
  ] as const
}

export function useGetV4LayersScoutingObservationsScoutingObservationIdAttachments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
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
        ? getGetV4LayersScoutingObservationsScoutingObservationIdAttachmentsKey(args)
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
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
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
          client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4LayersScoutingObservationsScoutingObservationIdAttachments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
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
        ? getGetV4LayersScoutingObservationsScoutingObservationIdAttachmentsKey(args)
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
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments']['$get']
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
          client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsKey(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v4',
    '/v4/layers/scoutingObservations/:scoutingObservationId/attachments/:attachmentId/contents',
    keyArgs,
  ] as const
}

export function useGetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
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
        ? getGetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsKey(
            args,
          )
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
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
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
          client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments[
            ':attachmentId'
          ].contents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
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
        ? getGetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsKey(
            args,
          )
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
                (typeof client.v4.layers.scoutingObservations)[':scoutingObservationId']['attachments'][':attachmentId']['contents']['$get']
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
          client.v4.layers.scoutingObservations[':scoutingObservationId'].attachments[
            ':attachmentId'
          ].contents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4OperationsAllKey(
  args: InferRequestType<typeof client.v4.operations.all.$get>,
) {
  return ['v4', '/v4/operations/all', args] as const
}

export function useGetV4OperationsAll<TError = unknown>(
  args: InferRequestType<typeof client.v4.operations.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>>
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
        ? getGetV4OperationsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.operations.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4OperationsAll<TError = unknown>(
  args: InferRequestType<typeof client.v4.operations.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>>
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
        ? getGetV4OperationsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.operations.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.operations.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ResourceOwnersResourceOwnerIdKey(
  args: InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>,
) {
  return ['v4', '/v4/resourceOwners/:resourceOwnerId', args] as const
}

export function useGetV4ResourceOwnersResourceOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
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
        ? getGetV4ResourceOwnersResourceOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.resourceOwners[':resourceOwnerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ResourceOwnersResourceOwnerId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
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
        ? getGetV4ResourceOwnersResourceOwnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.resourceOwners)[':resourceOwnerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.resourceOwners[':resourceOwnerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4UploadsKey() {
  return ['v4', '/v4/uploads', 'POST'] as const
}

export function usePostV4Uploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.uploads.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v4.uploads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.uploads.$post> }) =>
        parseResponse(client.v4.uploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4UploadsStatusQueryKey() {
  return ['v4', '/v4/uploads/status/query', 'POST'] as const
}

export function usePostV4UploadsStatusQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.uploads.status.query.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.uploads.status.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4UploadsStatusQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v4.uploads.status.query.$post> },
      ) => parseResponse(client.v4.uploads.status.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4UploadsUploadIdKey() {
  return ['v4', '/v4/uploads/:uploadId', 'PUT'] as const
}

export function usePutV4UploadsUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.uploads)[':uploadId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4UploadsUploadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.uploads)[':uploadId']['$put']> },
      ) => parseResponse(client.v4.uploads[':uploadId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4UploadsUploadIdStatusKey(
  args: InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>,
) {
  return ['v4', '/v4/uploads/:uploadId/status', args] as const
}

export function useGetV4UploadsUploadIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
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
        ? getGetV4UploadsUploadIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.uploads[':uploadId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4UploadsUploadIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
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
        ? getGetV4UploadsUploadIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.uploads)[':uploadId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.uploads[':uploadId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
