import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostVersionsPublishAnon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.versions.publish.anon.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.versions.publish.anon.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVersionsPublishAnonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVersionsVersionIdExportFormatQueryKey(
  args: InferRequestType<(typeof client.versions)[':versionId']['export'][':format']['$get']>,
) {
  return ['versions', '/versions/:versionId/export/:format', args] as const
}

export function getVersionsVersionIdExportFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.versions)[':versionId']['export'][':format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.versions)[':versionId']['export'][':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVersionsVersionIdExportFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.versions[':versionId'].export[':format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVersionsVersionIdExportFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.versions)[':versionId']['export'][':format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.versions)[':versionId']['export'][':format']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getVersionsVersionIdExportFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVersionsVersionIdExportFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutVersionsVersionIdImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVersionsVersionIdImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostVersionsVersionIdPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVersionsVersionIdPublishMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutVersionsVersionIdUnpublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVersionsVersionIdUnpublishMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
