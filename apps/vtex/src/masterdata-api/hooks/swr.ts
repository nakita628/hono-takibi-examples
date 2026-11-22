import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiDataentitiesKey(
  args: InferRequestType<typeof client.api.dataentities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities', keyArgs] as const
}

export function useGetApiDataentities<TError = unknown>(
  args: InferRequestType<typeof client.api.dataentities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
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
        ? getGetApiDataentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.dataentities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentities<TError = unknown>(
  args: InferRequestType<typeof client.api.dataentities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
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
        ? getGetApiDataentitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.dataentities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDataentitiesAcronymKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym', keyArgs] as const
}

export function useGetApiDataentitiesAcronym<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
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
        ? getGetApiDataentitiesAcronymKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.dataentities[':acronym'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesAcronym<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
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
        ? getGetApiDataentitiesAcronymKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.dataentities[':acronym'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiDataentitiesAcronymDocumentsKey() {
  return ['api', '/api/dataentities/:acronym/documents', 'PUT'] as const
}

export function usePutApiDataentitiesAcronymDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataentitiesAcronymDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>
        },
      ) => parseResponse(client.api.dataentities[':acronym'].documents.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiDataentitiesAcronymDocumentsKey() {
  return ['api', '/api/dataentities/:acronym/documents', 'POST'] as const
}

export function usePostApiDataentitiesAcronymDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDataentitiesAcronymDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>
        },
      ) => parseResponse(client.api.dataentities[':acronym'].documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiDataentitiesAcronymDocumentsKey() {
  return ['api', '/api/dataentities/:acronym/documents', 'PATCH'] as const
}

export function usePatchApiDataentitiesAcronymDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiDataentitiesAcronymDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>
        },
      ) => parseResponse(client.api.dataentities[':acronym'].documents.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataentitiesAcronymDocumentsIdKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/documents/:id', keyArgs] as const
}

export function useGetApiDataentitiesAcronymDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
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
        ? getGetApiDataentitiesAcronymDocumentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesAcronymDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
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
        ? getGetApiDataentitiesAcronymDocumentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiDataentitiesAcronymDocumentsIdKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id', 'PUT'] as const
}

export function usePutApiDataentitiesAcronymDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataentitiesAcronymDocumentsIdKey()
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
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiDataentitiesAcronymDocumentsIdKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id', 'DELETE'] as const
}

export function useDeleteApiDataentitiesAcronymDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiDataentitiesAcronymDocumentsIdKey()
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
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiDataentitiesAcronymDocumentsIdKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id', 'PATCH'] as const
}

export function usePatchApiDataentitiesAcronymDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiDataentitiesAcronymDocumentsIdKey()
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
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiDataentitiesAcronymDocumentsIdClustersKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/clusters', 'POST'] as const
}

export function usePostApiDataentitiesAcronymDocumentsIdClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDataentitiesAcronymDocumentsIdClustersKey()
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
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'].clusters.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiDataentitiesAcronymDocumentsIdScoreKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/score', 'PUT'] as const
}

export function usePutApiDataentitiesAcronymDocumentsIdScore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataentitiesAcronymDocumentsIdScoreKey()
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
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'].score.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiDataentitiesAcronymDocumentsIdScoreFieldNameKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/score/:field-name', 'PUT'] as const
}

export function usePutApiDataentitiesAcronymDocumentsIdScoreFieldName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataentitiesAcronymDocumentsIdScoreFieldNameKey()
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
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'].score[':field-name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiDataentitiesAcronymDocumentsIdScoreFieldNameKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/score/:field-name', 'DELETE'] as const
}

export function useDeleteApiDataentitiesAcronymDocumentsIdScoreFieldName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiDataentitiesAcronymDocumentsIdScoreFieldNameKey()
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
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'].score[':field-name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataentitiesAcronymDocumentsIdVersionsKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/documents/:id/versions', keyArgs] as const
}

export function useGetApiDataentitiesAcronymDocumentsIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
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
        ? getGetApiDataentitiesAcronymDocumentsIdVersionsKey(args)
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
                (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
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
          client.api.dataentities[':acronym'].documents[':id'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesAcronymDocumentsIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
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
        ? getGetApiDataentitiesAcronymDocumentsIdVersionsKey(args)
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
                (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
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
          client.api.dataentities[':acronym'].documents[':id'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDataentitiesAcronymDocumentsIdVersionsVersionIdKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/documents/:id/versions/:versionId', keyArgs] as const
}

export function useGetApiDataentitiesAcronymDocumentsIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
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
        ? getGetApiDataentitiesAcronymDocumentsIdVersionsVersionIdKey(args)
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
                (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
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
          client.api.dataentities[':acronym'].documents[':id'].versions[':versionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesAcronymDocumentsIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
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
        ? getGetApiDataentitiesAcronymDocumentsIdVersionsVersionIdKey(args)
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
                (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
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
          client.api.dataentities[':acronym'].documents[':id'].versions[':versionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiDataentitiesAcronymDocumentsIdVersionsVersionIdKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/versions/:versionId', 'PUT'] as const
}

export function usePutApiDataentitiesAcronymDocumentsIdVersionsVersionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataentitiesAcronymDocumentsIdVersionsVersionIdKey()
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
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'].versions[':versionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiDataentitiesAcronymDocumentsIdFieldAttachmentsKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/:field/attachments', 'POST'] as const
}

export function usePostApiDataentitiesAcronymDocumentsIdFieldAttachments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDataentitiesAcronymDocumentsIdFieldAttachmentsKey()
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
            (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':acronym'].documents[':id'][':field'].attachments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
) {
  return [
    'api',
    '/api/dataentities/:acronym/documents/:id/:field/attachments/:file-name',
    args,
  ] as const
}

export function useGetApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
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
        ? getGetApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameKey(args)
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
                (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
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
          client.api.dataentities[':acronym'].documents[':id'][':field'].attachments[
            ':file-name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
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
        ? getGetApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameKey(args)
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
                (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
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
          client.api.dataentities[':acronym'].documents[':id'][':field'].attachments[
            ':file-name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDataentitiesAcronymScrollKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/scroll', keyArgs] as const
}

export function useGetApiDataentitiesAcronymScroll<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
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
        ? getGetApiDataentitiesAcronymScrollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':acronym'].scroll.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesAcronymScroll<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
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
        ? getGetApiDataentitiesAcronymScrollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':acronym'].scroll.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDataentitiesAcronymSearchKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/search', keyArgs] as const
}

export function useGetApiDataentitiesAcronymSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
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
        ? getGetApiDataentitiesAcronymSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':acronym'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesAcronymSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
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
        ? getGetApiDataentitiesAcronymSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':acronym'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
