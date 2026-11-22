import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVersionsKey() {
  return ['versions'] as const
}

export function getPostVersionsPublishAnonKey() {
  return ['versions', '/versions/publish/anon', 'POST'] as const
}

export function usePostVersionsPublishAnon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.versions.publish.anon.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.versions.publish.anon.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionsPublishAnonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.versions.publish.anon.$post> },
      ) => parseResponse(client.versions.publish.anon.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionsVersionIdExportFormatKey(
  args: InferRequestType<(typeof client.versions)[':versionId']['export'][':format']['$get']>,
) {
  return ['versions', '/versions/:versionId/export/:format', args] as const
}

export function useGetVersionsVersionIdExportFormat<TError = unknown>(
  args: InferRequestType<(typeof client.versions)[':versionId']['export'][':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.versions)[':versionId']['export'][':format']['$get']>>
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
        ? getGetVersionsVersionIdExportFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.versions)[':versionId']['export'][':format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.versions[':versionId'].export[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersionsVersionIdExportFormat<TError = unknown>(
  args: InferRequestType<(typeof client.versions)[':versionId']['export'][':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.versions)[':versionId']['export'][':format']['$get']>>
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
        ? getGetVersionsVersionIdExportFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.versions)[':versionId']['export'][':format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.versions[':versionId'].export[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutVersionsVersionIdImportKey() {
  return ['versions', '/versions/:versionId/import', 'PUT'] as const
}

export function usePutVersionsVersionIdImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.versions)[':versionId']['import']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.versions)[':versionId']['import']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVersionsVersionIdImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.versions)[':versionId']['import']['$put']> },
      ) => parseResponse(client.versions[':versionId'].import.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVersionsVersionIdPublishKey() {
  return ['versions', '/versions/:versionId/publish', 'POST'] as const
}

export function usePostVersionsVersionIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.versions)[':versionId']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.versions)[':versionId']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionsVersionIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.versions)[':versionId']['publish']['$post']> },
      ) => parseResponse(client.versions[':versionId'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutVersionsVersionIdUnpublishKey() {
  return ['versions', '/versions/:versionId/unpublish', 'PUT'] as const
}

export function usePutVersionsVersionIdUnpublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.versions)[':versionId']['unpublish']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.versions)[':versionId']['unpublish']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVersionsVersionIdUnpublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.versions)[':versionId']['unpublish']['$put']> },
      ) => parseResponse(client.versions[':versionId'].unpublish.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
