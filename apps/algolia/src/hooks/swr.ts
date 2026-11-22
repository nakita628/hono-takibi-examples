import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_1Key() {
  return ['1'] as const
}

export function getAccountCopyIndexKey() {
  return ['accountCopyIndex'] as const
}

export function getBrowseObjectsKey() {
  return ['browseObjects'] as const
}

export function getChunkedBatchKey() {
  return ['chunkedBatch'] as const
}

export function getDeleteObjectsKey() {
  return ['deleteObjects'] as const
}

export function getGenerateSecuredApiKeyKey() {
  return ['generateSecuredApiKey'] as const
}

export function getIndexExistsKey() {
  return ['indexExists'] as const
}

export function getPartialUpdateObjectsKey() {
  return ['partialUpdateObjects'] as const
}

export function getPartialUpdateObjectsWithTransformationKey() {
  return ['partialUpdateObjectsWithTransformation'] as const
}

export function getReplaceAllObjectsKey() {
  return ['replaceAllObjects'] as const
}

export function getReplaceAllObjectsWithTransformationKey() {
  return ['replaceAllObjectsWithTransformation'] as const
}

export function getSaveObjectsKey() {
  return ['saveObjects'] as const
}

export function getSaveObjectsWithTransformationKey() {
  return ['saveObjectsWithTransformation'] as const
}

export function getSetClientApiKeyKey() {
  return ['setClientApiKey'] as const
}

export function getWaitForApiKeyKey() {
  return ['waitForApiKey'] as const
}

export function getWaitForAppTaskKey() {
  return ['waitForAppTask'] as const
}

export function getWaitForTaskKey() {
  return ['waitForTask'] as const
}

export function getPathKey() {
  return ['{path}'] as const
}

export function getGetPathKey(args: InferRequestType<(typeof client)[':path']['$get']>) {
  return [':path', '/:path', args] as const
}

export function useGetPath<TError = unknown>(
  args: InferRequestType<(typeof client)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
      >,
      TError
    >(swrKey, async () => parseResponse(client[':path'].$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPath<TError = unknown>(
  args: InferRequestType<(typeof client)[':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
      >,
      TError
    >(swrKey, async () => parseResponse(client[':path'].$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutPathKey() {
  return [':path', '/:path', 'PUT'] as const
}

export function usePutPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':path']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':path']['$put']> }) =>
        parseResponse(client[':path'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPathKey() {
  return [':path', '/:path', 'POST'] as const
}

export function usePostPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':path']['$post']> }) =>
        parseResponse(client[':path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePathKey() {
  return [':path', '/:path', 'DELETE'] as const
}

export function useDeletePath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':path']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':path']['$delete']> }) =>
        parseResponse(client[':path'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameQueryKey() {
  return ['1', '/1/indexes/:indexName/query', 'POST'] as const
}

export function usePost1IndexesIndexNameQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['indexes'][':indexName']['query']['$post']>
        },
      ) => parseResponse(client['1'].indexes[':indexName'].query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesStarQueriesKey() {
  return ['1', '/1/indexes/*/queries', 'POST'] as const
}

export function usePost1IndexesStarQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes']['*']['queries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes']['*']['queries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesStarQueriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1']['indexes']['*']['queries']['$post']> },
      ) => parseResponse(client['1'].indexes['*'].queries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameFacetsFacetNameQueryKey() {
  return ['1', '/1/indexes/:indexName/facets/:facetName/query', 'POST'] as const
}

export function usePost1IndexesIndexNameFacetsFacetNameQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1']['indexes'][':indexName']['facets'][':facetName']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['1']['indexes'][':indexName']['facets'][':facetName']['query']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameFacetsFacetNameQueryKey()
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
            (typeof client)['1']['indexes'][':indexName']['facets'][':facetName']['query']['$post']
          >
        },
      ) =>
        parseResponse(
          client['1'].indexes[':indexName'].facets[':facetName'].query.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameBrowseKey() {
  return ['1', '/1/indexes/:indexName/browse', 'POST'] as const
}

export function usePost1IndexesIndexNameBrowse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['browse']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['browse']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameBrowseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['indexes'][':indexName']['browse']['$post']>
        },
      ) => parseResponse(client['1'].indexes[':indexName'].browse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameKey() {
  return ['1', '/1/indexes/:indexName', 'POST'] as const
}

export function usePost1IndexesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['1']['indexes'][':indexName']['$post']> },
      ) => parseResponse(client['1'].indexes[':indexName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete1IndexesIndexNameKey() {
  return ['1', '/1/indexes/:indexName', 'DELETE'] as const
}

export function useDelete1IndexesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete1IndexesIndexNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1']['indexes'][':indexName']['$delete']> },
      ) => parseResponse(client['1'].indexes[':indexName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1IndexesIndexNameObjectIDKey(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>,
) {
  return ['1', '/1/indexes/:indexName/:objectID', args] as const
}

export function useGet1IndexesIndexNameObjectID<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>>
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
        ? getGet1IndexesIndexNameObjectIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['1'].indexes[':indexName'][':objectID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1IndexesIndexNameObjectID<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>>
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
        ? getGet1IndexesIndexNameObjectIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['1'].indexes[':indexName'][':objectID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut1IndexesIndexNameObjectIDKey() {
  return ['1', '/1/indexes/:indexName/:objectID', 'PUT'] as const
}

export function usePut1IndexesIndexNameObjectID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut1IndexesIndexNameObjectIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$put']>
        },
      ) => parseResponse(client['1'].indexes[':indexName'][':objectID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete1IndexesIndexNameObjectIDKey() {
  return ['1', '/1/indexes/:indexName/:objectID', 'DELETE'] as const
}

export function useDelete1IndexesIndexNameObjectID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete1IndexesIndexNameObjectIDKey()
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
            (typeof client)['1']['indexes'][':indexName'][':objectID']['$delete']
          >
        },
      ) =>
        parseResponse(client['1'].indexes[':indexName'][':objectID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameDeleteByQueryKey() {
  return ['1', '/1/indexes/:indexName/deleteByQuery', 'POST'] as const
}

export function usePost1IndexesIndexNameDeleteByQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['deleteByQuery']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['deleteByQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameDeleteByQueryKey()
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
            (typeof client)['1']['indexes'][':indexName']['deleteByQuery']['$post']
          >
        },
      ) => parseResponse(client['1'].indexes[':indexName'].deleteByQuery.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameClearKey() {
  return ['1', '/1/indexes/:indexName/clear', 'POST'] as const
}

export function usePost1IndexesIndexNameClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['clear']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['clear']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameClearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['indexes'][':indexName']['clear']['$post']>
        },
      ) => parseResponse(client['1'].indexes[':indexName'].clear.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameObjectIDPartialKey() {
  return ['1', '/1/indexes/:indexName/:objectID/partial', 'POST'] as const
}

export function usePost1IndexesIndexNameObjectIDPartial<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1']['indexes'][':indexName'][':objectID']['partial']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['partial']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameObjectIDPartialKey()
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
            (typeof client)['1']['indexes'][':indexName'][':objectID']['partial']['$post']
          >
        },
      ) =>
        parseResponse(
          client['1'].indexes[':indexName'][':objectID'].partial.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameBatchKey() {
  return ['1', '/1/indexes/:indexName/batch', 'POST'] as const
}

export function usePost1IndexesIndexNameBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['indexes'][':indexName']['batch']['$post']>
        },
      ) => parseResponse(client['1'].indexes[':indexName'].batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesStarBatchKey() {
  return ['1', '/1/indexes/*/batch', 'POST'] as const
}

export function usePost1IndexesStarBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes']['*']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes']['*']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesStarBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['1']['indexes']['*']['batch']['$post']> },
      ) => parseResponse(client['1'].indexes['*'].batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesStarObjectsKey() {
  return ['1', '/1/indexes/*/objects', 'POST'] as const
}

export function usePost1IndexesStarObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes']['*']['objects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes']['*']['objects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesStarObjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1']['indexes']['*']['objects']['$post']> },
      ) => parseResponse(client['1'].indexes['*'].objects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1IndexesIndexNameSettingsKey(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>,
) {
  return ['1', '/1/indexes/:indexName/settings', args] as const
}

export function useGet1IndexesIndexNameSettings<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>>
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
        ? getGet1IndexesIndexNameSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['1'].indexes[':indexName'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1IndexesIndexNameSettings<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>>
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
        ? getGet1IndexesIndexNameSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['1'].indexes[':indexName'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut1IndexesIndexNameSettingsKey() {
  return ['1', '/1/indexes/:indexName/settings', 'PUT'] as const
}

export function usePut1IndexesIndexNameSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut1IndexesIndexNameSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$put']>
        },
      ) => parseResponse(client['1'].indexes[':indexName'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1IndexesIndexNameSynonymsObjectIDKey(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
  >,
) {
  return ['1', '/1/indexes/:indexName/synonyms/:objectID', args] as const
}

export function useGet1IndexesIndexNameSynonymsObjectID<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
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
        ? getGet1IndexesIndexNameSynonymsObjectIDKey(args)
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
                (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
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
          client['1'].indexes[':indexName'].synonyms[':objectID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1IndexesIndexNameSynonymsObjectID<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
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
        ? getGet1IndexesIndexNameSynonymsObjectIDKey(args)
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
                (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
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
          client['1'].indexes[':indexName'].synonyms[':objectID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut1IndexesIndexNameSynonymsObjectIDKey() {
  return ['1', '/1/indexes/:indexName/synonyms/:objectID', 'PUT'] as const
}

export function usePut1IndexesIndexNameSynonymsObjectID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut1IndexesIndexNameSynonymsObjectIDKey()
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
            (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$put']
          >
        },
      ) =>
        parseResponse(
          client['1'].indexes[':indexName'].synonyms[':objectID'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete1IndexesIndexNameSynonymsObjectIDKey() {
  return ['1', '/1/indexes/:indexName/synonyms/:objectID', 'DELETE'] as const
}

export function useDelete1IndexesIndexNameSynonymsObjectID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete1IndexesIndexNameSynonymsObjectIDKey()
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
            (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['1'].indexes[':indexName'].synonyms[':objectID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameSynonymsBatchKey() {
  return ['1', '/1/indexes/:indexName/synonyms/batch', 'POST'] as const
}

export function usePost1IndexesIndexNameSynonymsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['synonyms']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['synonyms']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameSynonymsBatchKey()
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
            (typeof client)['1']['indexes'][':indexName']['synonyms']['batch']['$post']
          >
        },
      ) =>
        parseResponse(client['1'].indexes[':indexName'].synonyms.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameSynonymsClearKey() {
  return ['1', '/1/indexes/:indexName/synonyms/clear', 'POST'] as const
}

export function usePost1IndexesIndexNameSynonymsClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['synonyms']['clear']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['synonyms']['clear']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameSynonymsClearKey()
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
            (typeof client)['1']['indexes'][':indexName']['synonyms']['clear']['$post']
          >
        },
      ) =>
        parseResponse(client['1'].indexes[':indexName'].synonyms.clear.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameSynonymsSearchKey() {
  return ['1', '/1/indexes/:indexName/synonyms/search', 'POST'] as const
}

export function usePost1IndexesIndexNameSynonymsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['synonyms']['search']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['synonyms']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameSynonymsSearchKey()
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
            (typeof client)['1']['indexes'][':indexName']['synonyms']['search']['$post']
          >
        },
      ) =>
        parseResponse(client['1'].indexes[':indexName'].synonyms.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1KeysKey() {
  return ['1', '/1/keys'] as const
}

export function useGet1Keys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGet1KeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1Keys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGet1KeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost1KeysKey() {
  return ['1', '/1/keys', 'POST'] as const
}

export function usePost1Keys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1KeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['1']['keys']['$post']> }) =>
        parseResponse(client['1'].keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1KeysKeyKey(
  args: InferRequestType<(typeof client)['1']['keys'][':key']['$get']>,
) {
  return ['1', '/1/keys/:key', args] as const
}

export function useGet1KeysKey<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['keys'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet1KeysKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].keys[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1KeysKey<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['keys'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet1KeysKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].keys[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut1KeysKeyKey() {
  return ['1', '/1/keys/:key', 'PUT'] as const
}

export function usePut1KeysKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['keys'][':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut1KeysKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['1']['keys'][':key']['$put']> },
      ) => parseResponse(client['1'].keys[':key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete1KeysKeyKey() {
  return ['1', '/1/keys/:key', 'DELETE'] as const
}

export function useDelete1KeysKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['keys'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete1KeysKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['1']['keys'][':key']['$delete']> },
      ) => parseResponse(client['1'].keys[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1KeysKeyRestoreKey() {
  return ['1', '/1/keys/:key/restore', 'POST'] as const
}

export function usePost1KeysKeyRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['keys'][':key']['restore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['keys'][':key']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1KeysKeyRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1']['keys'][':key']['restore']['$post']> },
      ) => parseResponse(client['1'].keys[':key'].restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1IndexesIndexNameRulesObjectIDKey(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
  >,
) {
  return ['1', '/1/indexes/:indexName/rules/:objectID', args] as const
}

export function useGet1IndexesIndexNameRulesObjectID<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
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
        ? getGet1IndexesIndexNameRulesObjectIDKey(args)
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
                (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
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
          client['1'].indexes[':indexName'].rules[':objectID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1IndexesIndexNameRulesObjectID<TError = unknown>(
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
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
        ? getGet1IndexesIndexNameRulesObjectIDKey(args)
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
                (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
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
          client['1'].indexes[':indexName'].rules[':objectID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut1IndexesIndexNameRulesObjectIDKey() {
  return ['1', '/1/indexes/:indexName/rules/:objectID', 'PUT'] as const
}

export function usePut1IndexesIndexNameRulesObjectID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut1IndexesIndexNameRulesObjectIDKey()
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
            (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$put']
          >
        },
      ) =>
        parseResponse(
          client['1'].indexes[':indexName'].rules[':objectID'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete1IndexesIndexNameRulesObjectIDKey() {
  return ['1', '/1/indexes/:indexName/rules/:objectID', 'DELETE'] as const
}

export function useDelete1IndexesIndexNameRulesObjectID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete1IndexesIndexNameRulesObjectIDKey()
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
            (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['1'].indexes[':indexName'].rules[':objectID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameRulesBatchKey() {
  return ['1', '/1/indexes/:indexName/rules/batch', 'POST'] as const
}

export function usePost1IndexesIndexNameRulesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['rules']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameRulesBatchKey()
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
            (typeof client)['1']['indexes'][':indexName']['rules']['batch']['$post']
          >
        },
      ) => parseResponse(client['1'].indexes[':indexName'].rules.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameRulesClearKey() {
  return ['1', '/1/indexes/:indexName/rules/clear', 'POST'] as const
}

export function usePost1IndexesIndexNameRulesClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['rules']['clear']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules']['clear']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameRulesClearKey()
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
            (typeof client)['1']['indexes'][':indexName']['rules']['clear']['$post']
          >
        },
      ) => parseResponse(client['1'].indexes[':indexName'].rules.clear.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1IndexesIndexNameRulesSearchKey() {
  return ['1', '/1/indexes/:indexName/rules/search', 'POST'] as const
}

export function usePost1IndexesIndexNameRulesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['rules']['search']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameRulesSearchKey()
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
            (typeof client)['1']['indexes'][':indexName']['rules']['search']['$post']
          >
        },
      ) => parseResponse(client['1'].indexes[':indexName'].rules.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1DictionariesDictionaryNameBatchKey() {
  return ['1', '/1/dictionaries/:dictionaryName/batch', 'POST'] as const
}

export function usePost1DictionariesDictionaryNameBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['dictionaries'][':dictionaryName']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['dictionaries'][':dictionaryName']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1DictionariesDictionaryNameBatchKey()
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
            (typeof client)['1']['dictionaries'][':dictionaryName']['batch']['$post']
          >
        },
      ) =>
        parseResponse(client['1'].dictionaries[':dictionaryName'].batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1DictionariesDictionaryNameSearchKey() {
  return ['1', '/1/dictionaries/:dictionaryName/search', 'POST'] as const
}

export function usePost1DictionariesDictionaryNameSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['dictionaries'][':dictionaryName']['search']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['dictionaries'][':dictionaryName']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1DictionariesDictionaryNameSearchKey()
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
            (typeof client)['1']['dictionaries'][':dictionaryName']['search']['$post']
          >
        },
      ) =>
        parseResponse(client['1'].dictionaries[':dictionaryName'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1DictionariesStarSettingsKey() {
  return ['1', '/1/dictionaries/*/settings'] as const
}

export function useGet1DictionariesStarSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$get']>>
        >
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
        ? getGet1DictionariesStarSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['1'].dictionaries['*'].settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1DictionariesStarSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$get']>>
        >
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
        ? getGet1DictionariesStarSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['1'].dictionaries['*'].settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut1DictionariesStarSettingsKey() {
  return ['1', '/1/dictionaries/*/settings', 'PUT'] as const
}

export function usePut1DictionariesStarSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['dictionaries']['*']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut1DictionariesStarSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1']['dictionaries']['*']['settings']['$put']> },
      ) => parseResponse(client['1'].dictionaries['*'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1DictionariesStarLanguagesKey() {
  return ['1', '/1/dictionaries/*/languages'] as const
}

export function useGet1DictionariesStarLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['languages']['$get']>>
        >
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
        ? getGet1DictionariesStarLanguagesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['languages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['1'].dictionaries['*'].languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1DictionariesStarLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['languages']['$get']>>
        >
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
        ? getGet1DictionariesStarLanguagesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['languages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['1'].dictionaries['*'].languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet1ClustersMappingKey(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>,
) {
  return ['1', '/1/clusters/mapping', args] as const
}

export function useGet1ClustersMapping<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>
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
        ? getGet1ClustersMappingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].clusters.mapping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1ClustersMapping<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>
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
        ? getGet1ClustersMappingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].clusters.mapping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost1ClustersMappingKey() {
  return ['1', '/1/clusters/mapping', 'POST'] as const
}

export function usePost1ClustersMapping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['clusters']['mapping']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1ClustersMappingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['1']['clusters']['mapping']['$post']> },
      ) => parseResponse(client['1'].clusters.mapping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1ClustersMappingBatchKey() {
  return ['1', '/1/clusters/mapping/batch', 'POST'] as const
}

export function usePost1ClustersMappingBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['clusters']['mapping']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1ClustersMappingBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['1']['clusters']['mapping']['batch']['$post']> },
      ) => parseResponse(client['1'].clusters.mapping.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1ClustersMappingTopKey() {
  return ['1', '/1/clusters/mapping/top'] as const
}

export function useGet1ClustersMappingTop<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['top']['$get']>>
        >
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
        ? getGet1ClustersMappingTopKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['top']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].clusters.mapping.top.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1ClustersMappingTop<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['top']['$get']>>
        >
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
        ? getGet1ClustersMappingTopKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['top']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].clusters.mapping.top.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet1ClustersMappingUserIDKey(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>,
) {
  return ['1', '/1/clusters/mapping/:userID', args] as const
}

export function useGet1ClustersMappingUserID<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>>
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
        ? getGet1ClustersMappingUserIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].clusters.mapping[':userID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1ClustersMappingUserID<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>>
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
        ? getGet1ClustersMappingUserIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].clusters.mapping[':userID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete1ClustersMappingUserIDKey() {
  return ['1', '/1/clusters/mapping/:userID', 'DELETE'] as const
}

export function useDelete1ClustersMappingUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete1ClustersMappingUserIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$delete']>
        },
      ) => parseResponse(client['1'].clusters.mapping[':userID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1ClustersKey() {
  return ['1', '/1/clusters'] as const
}

export function useGet1Clusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet1ClustersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].clusters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1Clusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet1ClustersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].clusters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost1ClustersMappingSearchKey() {
  return ['1', '/1/clusters/mapping/search', 'POST'] as const
}

export function usePost1ClustersMappingSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['clusters']['mapping']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1ClustersMappingSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['clusters']['mapping']['search']['$post']>
        },
      ) => parseResponse(client['1'].clusters.mapping.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1ClustersMappingPendingKey(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>,
) {
  return ['1', '/1/clusters/mapping/pending', args] as const
}

export function useGet1ClustersMappingPending<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>>
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
        ? getGet1ClustersMappingPendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].clusters.mapping.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1ClustersMappingPending<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>>
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
        ? getGet1ClustersMappingPendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].clusters.mapping.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet1SecuritySourcesKey() {
  return ['1', '/1/security/sources'] as const
}

export function useGet1SecuritySources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['security']['sources']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet1SecuritySourcesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['security']['sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].security.sources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1SecuritySources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['security']['sources']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet1SecuritySourcesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['1']['security']['sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].security.sources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut1SecuritySourcesKey() {
  return ['1', '/1/security/sources', 'PUT'] as const
}

export function usePut1SecuritySources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['security']['sources']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['security']['sources']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut1SecuritySourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['1']['security']['sources']['$put']> },
      ) => parseResponse(client['1'].security.sources.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost1SecuritySourcesAppendKey() {
  return ['1', '/1/security/sources/append', 'POST'] as const
}

export function usePost1SecuritySourcesAppend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['security']['sources']['append']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['security']['sources']['append']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1SecuritySourcesAppendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['security']['sources']['append']['$post']>
        },
      ) => parseResponse(client['1'].security.sources.append.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete1SecuritySourcesSourceKey() {
  return ['1', '/1/security/sources/:source', 'DELETE'] as const
}

export function useDelete1SecuritySourcesSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['security']['sources'][':source']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['security']['sources'][':source']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete1SecuritySourcesSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['security']['sources'][':source']['$delete']>
        },
      ) => parseResponse(client['1'].security.sources[':source'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1LogsKey(args: InferRequestType<(typeof client)['1']['logs']['$get']>) {
  return ['1', '/1/logs', args] as const
}

export function useGet1Logs<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet1LogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1Logs<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet1LogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet1TaskTaskIDKey(
  args: InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>,
) {
  return ['1', '/1/task/:taskID', args] as const
}

export function useGet1TaskTaskID<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet1TaskTaskIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].task[':taskID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1TaskTaskID<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet1TaskTaskIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].task[':taskID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet1IndexesIndexNameTaskTaskIDKey(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>,
) {
  return ['1', '/1/indexes/:indexName/task/:taskID', args] as const
}

export function useGet1IndexesIndexNameTaskTaskID<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>
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
        ? getGet1IndexesIndexNameTaskTaskIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['1'].indexes[':indexName'].task[':taskID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1IndexesIndexNameTaskTaskID<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>
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
        ? getGet1IndexesIndexNameTaskTaskIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['1'].indexes[':indexName'].task[':taskID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost1IndexesIndexNameOperationKey() {
  return ['1', '/1/indexes/:indexName/operation', 'POST'] as const
}

export function usePost1IndexesIndexNameOperation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['operation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['operation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost1IndexesIndexNameOperationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['1']['indexes'][':indexName']['operation']['$post']>
        },
      ) => parseResponse(client['1'].indexes[':indexName'].operation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet1IndexesKey(args: InferRequestType<(typeof client)['1']['indexes']['$get']>) {
  return ['1', '/1/indexes', args] as const
}

export function useGet1Indexes<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['indexes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet1IndexesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].indexes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet1Indexes<TError = unknown>(
  args: InferRequestType<(typeof client)['1']['indexes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet1IndexesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['1'].indexes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWaitForApiKeyKey(args: InferRequestType<typeof client.waitForApiKey.$get>) {
  return ['waitForApiKey', '/waitForApiKey', args] as const
}

export function useGetWaitForApiKey<TError = unknown>(
  args: InferRequestType<typeof client.waitForApiKey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWaitForApiKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.waitForApiKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWaitForApiKey<TError = unknown>(
  args: InferRequestType<typeof client.waitForApiKey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWaitForApiKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.waitForApiKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWaitForTaskKey(args: InferRequestType<typeof client.waitForTask.$get>) {
  return ['waitForTask', '/waitForTask', args] as const
}

export function useGetWaitForTask<TError = unknown>(
  args: InferRequestType<typeof client.waitForTask.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWaitForTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.waitForTask.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWaitForTask<TError = unknown>(
  args: InferRequestType<typeof client.waitForTask.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWaitForTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.waitForTask.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWaitForAppTaskKey(args: InferRequestType<typeof client.waitForAppTask.$get>) {
  return ['waitForAppTask', '/waitForAppTask', args] as const
}

export function useGetWaitForAppTask<TError = unknown>(
  args: InferRequestType<typeof client.waitForAppTask.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWaitForAppTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.waitForAppTask.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWaitForAppTask<TError = unknown>(
  args: InferRequestType<typeof client.waitForAppTask.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWaitForAppTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.waitForAppTask.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBrowseObjectsKey(args: InferRequestType<typeof client.browseObjects.$get>) {
  return ['browseObjects', '/browseObjects', args] as const
}

export function useGetBrowseObjects<TError = unknown>(
  args: InferRequestType<typeof client.browseObjects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrowseObjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browseObjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrowseObjects<TError = unknown>(
  args: InferRequestType<typeof client.browseObjects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrowseObjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.browseObjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenerateSecuredApiKeyKey(
  args: InferRequestType<typeof client.generateSecuredApiKey.$get>,
) {
  return ['generateSecuredApiKey', '/generateSecuredApiKey', args] as const
}

export function useGetGenerateSecuredApiKey<TError = unknown>(
  args: InferRequestType<typeof client.generateSecuredApiKey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>
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
        ? getGetGenerateSecuredApiKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.generateSecuredApiKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenerateSecuredApiKey<TError = unknown>(
  args: InferRequestType<typeof client.generateSecuredApiKey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>
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
        ? getGetGenerateSecuredApiKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.generateSecuredApiKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountCopyIndexKey(
  args: InferRequestType<typeof client.accountCopyIndex.$get>,
) {
  return ['accountCopyIndex', '/accountCopyIndex', args] as const
}

export function useGetAccountCopyIndex<TError = unknown>(
  args: InferRequestType<typeof client.accountCopyIndex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
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
        ? getGetAccountCopyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accountCopyIndex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountCopyIndex<TError = unknown>(
  args: InferRequestType<typeof client.accountCopyIndex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
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
        ? getGetAccountCopyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accountCopyIndex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReplaceAllObjectsKey(
  args: InferRequestType<typeof client.replaceAllObjects.$get>,
) {
  return ['replaceAllObjects', '/replaceAllObjects', args] as const
}

export function useGetReplaceAllObjects<TError = unknown>(
  args: InferRequestType<typeof client.replaceAllObjects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>>
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
        ? getGetReplaceAllObjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.replaceAllObjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReplaceAllObjects<TError = unknown>(
  args: InferRequestType<typeof client.replaceAllObjects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>>
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
        ? getGetReplaceAllObjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.replaceAllObjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReplaceAllObjectsWithTransformationKey(
  args: InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>,
) {
  return [
    'replaceAllObjectsWithTransformation',
    '/replaceAllObjectsWithTransformation',
    args,
  ] as const
}

export function useGetReplaceAllObjectsWithTransformation<TError = unknown>(
  args: InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.replaceAllObjectsWithTransformation.$get>>
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
        ? getGetReplaceAllObjectsWithTransformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.replaceAllObjectsWithTransformation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.replaceAllObjectsWithTransformation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReplaceAllObjectsWithTransformation<TError = unknown>(
  args: InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.replaceAllObjectsWithTransformation.$get>>
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
        ? getGetReplaceAllObjectsWithTransformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.replaceAllObjectsWithTransformation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.replaceAllObjectsWithTransformation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChunkedBatchKey(args: InferRequestType<typeof client.chunkedBatch.$get>) {
  return ['chunkedBatch', '/chunkedBatch', args] as const
}

export function useGetChunkedBatch<TError = unknown>(
  args: InferRequestType<typeof client.chunkedBatch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChunkedBatchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chunkedBatch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChunkedBatch<TError = unknown>(
  args: InferRequestType<typeof client.chunkedBatch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChunkedBatchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chunkedBatch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSaveObjectsKey(args: InferRequestType<typeof client.saveObjects.$get>) {
  return ['saveObjects', '/saveObjects', args] as const
}

export function useGetSaveObjects<TError = unknown>(
  args: InferRequestType<typeof client.saveObjects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSaveObjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saveObjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSaveObjects<TError = unknown>(
  args: InferRequestType<typeof client.saveObjects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSaveObjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saveObjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSaveObjectsWithTransformationKey(
  args: InferRequestType<typeof client.saveObjectsWithTransformation.$get>,
) {
  return ['saveObjectsWithTransformation', '/saveObjectsWithTransformation', args] as const
}

export function useGetSaveObjectsWithTransformation<TError = unknown>(
  args: InferRequestType<typeof client.saveObjectsWithTransformation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>
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
        ? getGetSaveObjectsWithTransformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saveObjectsWithTransformation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSaveObjectsWithTransformation<TError = unknown>(
  args: InferRequestType<typeof client.saveObjectsWithTransformation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>
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
        ? getGetSaveObjectsWithTransformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saveObjectsWithTransformation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeleteObjectsKey() {
  return ['deleteObjects', '/deleteObjects', 'POST'] as const
}

export function usePostDeleteObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteObjects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteObjects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteObjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteObjects.$post> }) =>
        parseResponse(client.deleteObjects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPartialUpdateObjectsKey() {
  return ['partialUpdateObjects', '/partialUpdateObjects', 'POST'] as const
}

export function usePostPartialUpdateObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partialUpdateObjects.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.partialUpdateObjects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartialUpdateObjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.partialUpdateObjects.$post> },
      ) => parseResponse(client.partialUpdateObjects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPartialUpdateObjectsWithTransformationKey() {
  return [
    'partialUpdateObjectsWithTransformation',
    '/partialUpdateObjectsWithTransformation',
    'POST',
  ] as const
}

export function usePostPartialUpdateObjectsWithTransformation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.partialUpdateObjectsWithTransformation.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.partialUpdateObjectsWithTransformation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPartialUpdateObjectsWithTransformationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.partialUpdateObjectsWithTransformation.$post> },
      ) => parseResponse(client.partialUpdateObjectsWithTransformation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIndexExistsKey(args: InferRequestType<typeof client.indexExists.$get>) {
  return ['indexExists', '/indexExists', args] as const
}

export function useGetIndexExists<TError = unknown>(
  args: InferRequestType<typeof client.indexExists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexExistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexExists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndexExists<TError = unknown>(
  args: InferRequestType<typeof client.indexExists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndexExistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.indexExists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSetClientApiKeyKey(
  args: InferRequestType<typeof client.setClientApiKey.$get>,
) {
  return ['setClientApiKey', '/setClientApiKey', args] as const
}

export function useGetSetClientApiKey<TError = unknown>(
  args: InferRequestType<typeof client.setClientApiKey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
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
        ? getGetSetClientApiKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setClientApiKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetClientApiKey<TError = unknown>(
  args: InferRequestType<typeof client.setClientApiKey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
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
        ? getGetSetClientApiKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setClientApiKey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
