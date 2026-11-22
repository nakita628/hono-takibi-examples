import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVersionsKey() {
  return ['versions'] as const
}

export function getPostVersionsPublishAnonMutationKey() {
  return ['versions', '/versions/publish/anon', 'POST'] as const
}

export function getPostVersionsPublishAnonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.versions.publish.anon.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.versions.publish.anon.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionsPublishAnonMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.versions.publish.anon.$post>) {
      return parseResponse(client.versions.publish.anon.$post(args, options))
    },
  })
}

export function usePostVersionsPublishAnon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.versions.publish.anon.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.versions.publish.anon.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVersionsPublishAnonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVersionsVersionIdExportFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.versions)[':versionId']['export'][':format']['$get']>
  >,
) {
  return ['versions', '/versions/:versionId/export/:format', toValue(args)] as const
}

export function getVersionsVersionIdExportFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.versions)[':versionId']['export'][':format']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionsVersionIdExportFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.versions[':versionId'].export[':format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVersionsVersionIdExportFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.versions)[':versionId']['export'][':format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.versions)[':versionId']['export'][':format']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.versions)[':versionId']['export'][':format']['$get']>
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
                  ReturnType<(typeof client.versions)[':versionId']['export'][':format']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVersionsVersionIdExportFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.versions)[':versionId']['export'][':format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVersionsVersionIdExportFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionsVersionIdExportFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.versions[':versionId'].export[':format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVersionsVersionIdImportMutationKey() {
  return ['versions', '/versions/:versionId/import', 'PUT'] as const
}

export function getPutVersionsVersionIdImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.versions)[':versionId']['import']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.versions)[':versionId']['import']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVersionsVersionIdImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.versions)[':versionId']['import']['$put']>,
    ) {
      return parseResponse(client.versions[':versionId'].import.$put(args, options))
    },
  })
}

export function usePutVersionsVersionIdImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.versions)[':versionId']['import']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.versions)[':versionId']['import']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVersionsVersionIdImportMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVersionsVersionIdPublishMutationKey() {
  return ['versions', '/versions/:versionId/publish', 'POST'] as const
}

export function getPostVersionsVersionIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.versions)[':versionId']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.versions)[':versionId']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVersionsVersionIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.versions)[':versionId']['publish']['$post']>,
    ) {
      return parseResponse(client.versions[':versionId'].publish.$post(args, options))
    },
  })
}

export function usePostVersionsVersionIdPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.versions)[':versionId']['publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.versions)[':versionId']['publish']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVersionsVersionIdPublishMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutVersionsVersionIdUnpublishMutationKey() {
  return ['versions', '/versions/:versionId/unpublish', 'PUT'] as const
}

export function getPutVersionsVersionIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.versions)[':versionId']['unpublish']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.versions)[':versionId']['unpublish']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVersionsVersionIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.versions)[':versionId']['unpublish']['$put']>,
    ) {
      return parseResponse(client.versions[':versionId'].unpublish.$put(args, options))
    },
  })
}

export function usePutVersionsVersionIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.versions)[':versionId']['unpublish']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.versions)[':versionId']['unpublish']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVersionsVersionIdUnpublishMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
