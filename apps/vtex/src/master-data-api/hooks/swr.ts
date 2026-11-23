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

export function getPostApiDataentitiesAddressDocumentsKey() {
  return ['api', '/api/dataentities/Address/documents', 'POST'] as const
}

export function usePostApiDataentitiesAddressDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.dataentities.Address.documents.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.dataentities.Address.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDataentitiesAddressDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.dataentities.Address.documents.$post> },
      ) => parseResponse(client.api.dataentities.Address.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiDataentitiesAddressDocumentsIdKey() {
  return ['api', '/api/dataentities/Address/documents/:id', 'DELETE'] as const
}

export function useDeleteApiDataentitiesAddressDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiDataentitiesAddressDocumentsIdKey()
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
            (typeof client.api.dataentities.Address.documents)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.api.dataentities.Address.documents[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiDataentitiesAddressDocumentsIdKey() {
  return ['api', '/api/dataentities/Address/documents/:id', 'PATCH'] as const
}

export function usePatchApiDataentitiesAddressDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiDataentitiesAddressDocumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.dataentities.Address.documents)[':id']['$patch']>
        },
      ) =>
        parseResponse(client.api.dataentities.Address.documents[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiDataentitiesClientDocumentsKey() {
  return ['api', '/api/dataentities/Client/documents', 'POST'] as const
}

export function usePostApiDataentitiesClientDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.dataentities.Client.documents.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.dataentities.Client.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDataentitiesClientDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.dataentities.Client.documents.$post> },
      ) => parseResponse(client.api.dataentities.Client.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiDataentitiesClientDocumentsIdKey() {
  return ['api', '/api/dataentities/Client/documents/:id', 'DELETE'] as const
}

export function useDeleteApiDataentitiesClientDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiDataentitiesClientDocumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$delete']>
        },
      ) =>
        parseResponse(client.api.dataentities.Client.documents[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiDataentitiesClientDocumentsIdKey() {
  return ['api', '/api/dataentities/Client/documents/:id', 'PATCH'] as const
}

export function usePatchApiDataentitiesClientDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiDataentitiesClientDocumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.dataentities.Client.documents)[':id']['$patch']>
        },
      ) =>
        parseResponse(client.api.dataentities.Client.documents[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiDataentitiesDataEntityNameDocumentsKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents', 'POST'] as const
}

export function usePostApiDataentitiesDataEntityNameDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDataentitiesDataEntityNameDocumentsKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['documents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':dataEntityName'].documents.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiDataentitiesDataEntityNameDocumentsKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents', 'PATCH'] as const
}

export function usePatchApiDataentitiesDataEntityNameDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiDataentitiesDataEntityNameDocumentsKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['documents']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':dataEntityName'].documents.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataentitiesDataEntityNameDocumentsIdKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', keyArgs] as const
}

export function useGetApiDataentitiesDataEntityNameDocumentsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
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
        ? getGetApiDataentitiesDataEntityNameDocumentsIdKey(args)
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
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
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
          client.api.dataentities[':dataEntityName'].documents[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesDataEntityNameDocumentsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
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
        ? getGetApiDataentitiesDataEntityNameDocumentsIdKey(args)
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
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$get']
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
          client.api.dataentities[':dataEntityName'].documents[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiDataentitiesDataEntityNameDocumentsIdKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', 'PUT'] as const
}

export function usePutApiDataentitiesDataEntityNameDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataentitiesDataEntityNameDocumentsIdKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':dataEntityName'].documents[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiDataentitiesDataEntityNameDocumentsIdKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', 'DELETE'] as const
}

export function useDeleteApiDataentitiesDataEntityNameDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiDataentitiesDataEntityNameDocumentsIdKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':dataEntityName'].documents[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiDataentitiesDataEntityNameDocumentsIdKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id', 'PATCH'] as const
}

export function usePatchApiDataentitiesDataEntityNameDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiDataentitiesDataEntityNameDocumentsIdKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':dataEntityName'].documents[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiDataentitiesDataEntityNameDocumentsIdClustersKey() {
  return ['api', '/api/dataentities/:dataEntityName/documents/:id/clusters', 'POST'] as const
}

export function usePostApiDataentitiesDataEntityNameDocumentsIdClusters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDataentitiesDataEntityNameDocumentsIdClustersKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['clusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':dataEntityName'].documents[':id'].clusters.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataentitiesDataEntityNameDocumentsIdVersionsKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/documents/:id/versions', keyArgs] as const
}

export function useGetApiDataentitiesDataEntityNameDocumentsIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
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
        ? getGetApiDataentitiesDataEntityNameDocumentsIdVersionsKey(args)
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
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
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
          client.api.dataentities[':dataEntityName'].documents[':id'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesDataEntityNameDocumentsIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
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
        ? getGetApiDataentitiesDataEntityNameDocumentsIdVersionsKey(args)
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
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions']['$get']
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
          client.api.dataentities[':dataEntityName'].documents[':id'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/dataentities/:dataEntityName/documents/:id/versions/:versionId',
    keyArgs,
  ] as const
}

export function useGetApiDataentitiesDataEntityNameDocumentsIdVersionsVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
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
        ? getGetApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdKey(args)
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
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
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
          client.api.dataentities[':dataEntityName'].documents[':id'].versions[':versionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesDataEntityNameDocumentsIdVersionsVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
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
        ? getGetApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdKey(args)
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
                (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$get']
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
          client.api.dataentities[':dataEntityName'].documents[':id'].versions[':versionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdKey() {
  return [
    'api',
    '/api/dataentities/:dataEntityName/documents/:id/versions/:versionId',
    'PUT',
  ] as const
}

export function usePutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['documents'][':id']['versions'][':versionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':dataEntityName'].documents[':id'].versions[':versionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataentitiesDataEntityNameIndicesKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/indices', keyArgs] as const
}

export function useGetApiDataentitiesDataEntityNameIndices<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>
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
        ? getGetApiDataentitiesDataEntityNameIndicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':dataEntityName'].indices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesDataEntityNameIndices<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>
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
        ? getGetApiDataentitiesDataEntityNameIndicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':dataEntityName'].indices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiDataentitiesDataEntityNameIndicesKey() {
  return ['api', '/api/dataentities/:dataEntityName/indices', 'PUT'] as const
}

export function usePutApiDataentitiesDataEntityNameIndices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['indices']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataentitiesDataEntityNameIndicesKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['indices']['$put']
          >
        },
      ) =>
        parseResponse(client.api.dataentities[':dataEntityName'].indices.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataentitiesDataEntityNameIndicesIndexNameKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/indices/:index_name', keyArgs] as const
}

export function useGetApiDataentitiesDataEntityNameIndicesIndexName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
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
        ? getGetApiDataentitiesDataEntityNameIndicesIndexNameKey(args)
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
                (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
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
          client.api.dataentities[':dataEntityName'].indices[':index_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesDataEntityNameIndicesIndexName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
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
        ? getGetApiDataentitiesDataEntityNameIndicesIndexNameKey(args)
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
                (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$get']
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
          client.api.dataentities[':dataEntityName'].indices[':index_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiDataentitiesDataEntityNameIndicesIndexNameKey() {
  return ['api', '/api/dataentities/:dataEntityName/indices/:index_name', 'DELETE'] as const
}

export function useDeleteApiDataentitiesDataEntityNameIndicesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiDataentitiesDataEntityNameIndicesIndexNameKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['indices'][':index_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':dataEntityName'].indices[':index_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataentitiesDataEntityNameSchemasKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/schemas', keyArgs] as const
}

export function useGetApiDataentitiesDataEntityNameSchemas<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>
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
        ? getGetApiDataentitiesDataEntityNameSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':dataEntityName'].schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesDataEntityNameSchemas<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>
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
        ? getGetApiDataentitiesDataEntityNameSchemasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['schemas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':dataEntityName'].schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDataentitiesDataEntityNameSchemasSchemaNameKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/schemas/:schemaName', keyArgs] as const
}

export function useGetApiDataentitiesDataEntityNameSchemasSchemaName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
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
        ? getGetApiDataentitiesDataEntityNameSchemasSchemaNameKey(args)
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
                (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
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
          client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesDataEntityNameSchemasSchemaName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
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
        ? getGetApiDataentitiesDataEntityNameSchemasSchemaNameKey(args)
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
                (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$get']
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
          client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiDataentitiesDataEntityNameSchemasSchemaNameKey() {
  return ['api', '/api/dataentities/:dataEntityName/schemas/:schemaName', 'PUT'] as const
}

export function usePutApiDataentitiesDataEntityNameSchemasSchemaName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDataentitiesDataEntityNameSchemasSchemaNameKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiDataentitiesDataEntityNameSchemasSchemaNameKey() {
  return ['api', '/api/dataentities/:dataEntityName/schemas/:schemaName', 'DELETE'] as const
}

export function useDeleteApiDataentitiesDataEntityNameSchemasSchemaName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiDataentitiesDataEntityNameSchemasSchemaNameKey()
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
            (typeof client.api.dataentities)[':dataEntityName']['schemas'][':schemaName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.dataentities[':dataEntityName'].schemas[':schemaName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDataentitiesDataEntityNameScrollKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/scroll', keyArgs] as const
}

export function useGetApiDataentitiesDataEntityNameScroll<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>
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
        ? getGetApiDataentitiesDataEntityNameScrollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':dataEntityName'].scroll.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesDataEntityNameScroll<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>
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
        ? getGetApiDataentitiesDataEntityNameScrollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['scroll']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':dataEntityName'].scroll.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDataentitiesDataEntityNameSearchKey(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:dataEntityName/search', keyArgs] as const
}

export function useGetApiDataentitiesDataEntityNameSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>
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
        ? getGetApiDataentitiesDataEntityNameSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':dataEntityName'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDataentitiesDataEntityNameSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>
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
        ? getGetApiDataentitiesDataEntityNameSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.dataentities)[':dataEntityName']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.dataentities[':dataEntityName'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
