import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getEnvironmentsKey() {
  return ['environments'] as const
}

export function getImportKey() {
  return ['import'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMocksKey() {
  return ['mocks'] as const
}

export function getMonitorsKey() {
  return ['monitors'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getApisQueryKey(args: InferRequestType<typeof client.apis.$get>) {
  return ['apis', '/apis', args] as const
}

export function getApisQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.apis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApisQueryKey>
  >({
    queryKey: getApisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApis<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apis.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getApisQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApisMutationKey() {
  return ['apis', '/apis', 'POST'] as const
}

export function getPostApisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$post>>>>>,
    TError,
    InferRequestType<typeof client.apis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apis.$post>) {
      return parseResponse(client.apis.$post(args, options))
    },
  })
}

export function createPostApis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$post>>>>>,
          TError,
          InferRequestType<typeof client.apis.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApisMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisApiIdQueryKey(
  args: InferRequestType<(typeof client.apis)[':apiId']['$get']>,
) {
  return ['apis', '/apis/:apiId', args] as const
}

export function getApisApiIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.apis)[':apiId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdQueryKey>
  >({
    queryKey: getApisApiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApisApiId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apis)[':apiId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisApiIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApisApiIdMutationKey() {
  return ['apis', '/apis/:apiId', 'PUT'] as const
}

export function getPutApisApiIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.apis)[':apiId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apis)[':apiId']['$put']>) {
      return parseResponse(client.apis[':apiId'].$put(args, options))
    },
  })
}

export function createPutApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)[':apiId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApisApiIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisApiIdMutationKey() {
  return ['apis', '/apis/:apiId', 'DELETE'] as const
}

export function getDeleteApisApiIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)[':apiId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apis)[':apiId']['$delete']>) {
      return parseResponse(client.apis[':apiId'].$delete(args, options))
    },
  })
}

export function createDeleteApisApiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)[':apiId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApisApiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisApiIdVersionsQueryKey(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions']['$get']>,
) {
  return ['apis', '/apis/:apiId/versions', args] as const
}

export function getApisApiIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsQueryKey>
  >({
    queryKey: getApisApiIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apis)[':apiId']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdVersionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApisApiIdVersionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApisApiIdVersionsMutationKey() {
  return ['apis', '/apis/:apiId/versions', 'POST'] as const
}

export function getPostApisApiIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)[':apiId']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiIdVersionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.apis)[':apiId']['versions']['$post']>) {
      return parseResponse(client.apis[':apiId'].versions.$post(args, options))
    },
  })
}

export function createPostApisApiIdVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)[':apiId']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)[':apiId']['versions']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApisApiIdVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisApiIdVersionsApiVersionIdQueryKey(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId', args] as const
}

export function getApisApiIdVersionsApiVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdQueryKey>
  >({
    queryKey: getApisApiIdVersionsApiVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiIdVersionsApiVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisApiIdVersionsApiVersionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApisApiIdVersionsApiVersionIdMutationKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId', 'PUT'] as const
}

export function getPutApisApiIdVersionsApiVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiIdVersionsApiVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>,
    ) {
      return parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$put(args, options))
    },
  })
}

export function createPutApisApiIdVersionsApiVersionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApisApiIdVersionsApiVersionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApisApiIdVersionsApiVersionIdMutationKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId', 'DELETE'] as const
}

export function getDeleteApisApiIdVersionsApiVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisApiIdVersionsApiVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']
      >,
    ) {
      return parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$delete(args, options))
    },
  })
}

export function createDeleteApisApiIdVersionsApiVersionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApisApiIdVersionsApiVersionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisApiIdVersionsApiVersionIdContracttestQueryKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/contracttest', args] as const
}

export function getApisApiIdVersionsApiVersionIdContracttestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdContracttestQueryKey>
  >({
    queryKey: getApisApiIdVersionsApiVersionIdContracttestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].contracttest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiIdVersionsApiVersionIdContracttest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdContracttestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisApiIdVersionsApiVersionIdContracttestQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisApiIdVersionsApiVersionIdDocumentationQueryKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/documentation', args] as const
}

export function getApisApiIdVersionsApiVersionIdDocumentationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdDocumentationQueryKey>
  >({
    queryKey: getApisApiIdVersionsApiVersionIdDocumentationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].documentation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiIdVersionsApiVersionIdDocumentation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdDocumentationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisApiIdVersionsApiVersionIdDocumentationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisApiIdVersionsApiVersionIdEnvironmentQueryKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/environment', args] as const
}

export function getApisApiIdVersionsApiVersionIdEnvironmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdEnvironmentQueryKey>
  >({
    queryKey: getApisApiIdVersionsApiVersionIdEnvironmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].environment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiIdVersionsApiVersionIdEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdEnvironmentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisApiIdVersionsApiVersionIdEnvironmentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisApiIdVersionsApiVersionIdIntegrationtestQueryKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/integrationtest', args] as const
}

export function getApisApiIdVersionsApiVersionIdIntegrationtestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdIntegrationtestQueryKey>
  >({
    queryKey: getApisApiIdVersionsApiVersionIdIntegrationtestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].integrationtest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiIdVersionsApiVersionIdIntegrationtest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdIntegrationtestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisApiIdVersionsApiVersionIdIntegrationtestQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApisApiIdVersionsApiVersionIdMonitorQueryKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/monitor', args] as const
}

export function getApisApiIdVersionsApiVersionIdMonitorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdMonitorQueryKey>
  >({
    queryKey: getApisApiIdVersionsApiVersionIdMonitorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].monitor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiIdVersionsApiVersionIdMonitor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdMonitorQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisApiIdVersionsApiVersionIdMonitorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApisApiIdVersionsApiVersionIdRelationsQueryKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/relations', args] as const
}

export function getApisApiIdVersionsApiVersionIdRelationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdRelationsQueryKey>
  >({
    queryKey: getApisApiIdVersionsApiVersionIdRelationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].relations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiIdVersionsApiVersionIdRelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdRelationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisApiIdVersionsApiVersionIdRelationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApisApiIdVersionsApiVersionIdRelationsMutationKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/relations', 'POST'] as const
}

export function getPostApisApiIdVersionsApiVersionIdRelationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiIdVersionsApiVersionIdRelationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
      >,
    ) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].relations.$post(args, options),
      )
    },
  })
}

export function createPostApisApiIdVersionsApiVersionIdRelations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApisApiIdVersionsApiVersionIdRelationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApisApiIdVersionsApiVersionIdSchemasMutationKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/schemas', 'POST'] as const
}

export function getPostApisApiIdVersionsApiVersionIdSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiIdVersionsApiVersionIdSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
      >,
    ) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].schemas.$post(args, options),
      )
    },
  })
}

export function createPostApisApiIdVersionsApiVersionIdSchemas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApisApiIdVersionsApiVersionIdSchemasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId', args] as const
}

export function getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryKey>
  >({
    queryKey: getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiIdVersionsApiVersionIdSchemasSchemaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisApiIdVersionsApiVersionIdSchemasSchemaIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApisApiIdVersionsApiVersionIdSchemasSchemaIdMutationKey() {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId', 'PUT'] as const
}

export function getPutApisApiIdVersionsApiVersionIdSchemasSchemaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiIdVersionsApiVersionIdSchemasSchemaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
      >,
    ) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].$put(args, options),
      )
    },
  })
}

export function createPutApisApiIdVersionsApiVersionIdSchemasSchemaId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApisApiIdVersionsApiVersionIdSchemasSchemaIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsMutationKey() {
  return [
    'apis',
    '/apis/:apiId/versions/:apiVersionId/schemas/:schemaId/collections',
    'POST',
  ] as const
}

export function getPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
      >,
    ) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].collections.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApisApiIdVersionsApiVersionIdTestsuiteQueryKey(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
  >,
) {
  return ['apis', '/apis/:apiId/versions/:apiVersionId/testsuite', args] as const
}

export function getApisApiIdVersionsApiVersionIdTestsuiteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiIdVersionsApiVersionIdTestsuiteQueryKey>
  >({
    queryKey: getApisApiIdVersionsApiVersionIdTestsuiteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'].testsuite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApisApiIdVersionsApiVersionIdTestsuite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApisApiIdVersionsApiVersionIdTestsuiteQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApisApiIdVersionsApiVersionIdTestsuiteQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaMutationKey() {
  return [
    'apis',
    '/apis/:apiId/versions/:apiVersionId/:entityType/:entityId/syncWithSchema',
    'PUT',
  ] as const
}

export function getPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
      >,
    ) {
      return parseResponse(
        client.apis[':apiId'].versions[':apiVersionId'][':entityType'][
          ':entityId'
        ].syncWithSchema.$put(args, options),
      )
    },
  })
}

export function createPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchema<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCollectionsQueryKey() {
  return ['collections', '/collections'] as const
}

export function getCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >({
    queryKey: getCollectionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCollectionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostCollectionsMutationKey() {
  return ['collections', '/collections', 'POST'] as const
}

export function getPostCollectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>>,
    TError,
    InferRequestType<typeof client.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.$post>) {
      return parseResponse(client.collections.$post(args, options))
    },
  })
}

export function createPostCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.collections.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCollectionsForkCollectionUidMutationKey() {
  return ['collections', '/collections/fork/:collection_uid', 'POST'] as const
}

export function getPostCollectionsForkCollectionUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections.fork)[':collection_uid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections.fork)[':collection_uid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsForkCollectionUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections.fork)[':collection_uid']['$post']>,
    ) {
      return parseResponse(client.collections.fork[':collection_uid'].$post(args, options))
    },
  })
}

export function createPostCollectionsForkCollectionUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections.fork)[':collection_uid']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections.fork)[':collection_uid']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsForkCollectionUidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCollectionsMergeMutationKey() {
  return ['collections', '/collections/merge', 'POST'] as const
}

export function getPostCollectionsMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.merge.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.collections.merge.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMergeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.merge.$post>) {
      return parseResponse(client.collections.merge.$post(args, options))
    },
  })
}

export function createPostCollectionsMerge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.collections.merge.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.collections.merge.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCollectionsMergeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCollectionsCollectionUidQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_uid']['$get']>,
) {
  return ['collections', '/collections/:collection_uid', args] as const
}

export function getCollectionsCollectionUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionUidQueryKey>
  >({
    queryKey: getCollectionsCollectionUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_uid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCollectionsCollectionUidQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionsCollectionUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCollectionsCollectionUidMutationKey() {
  return ['collections', '/collections/:collection_uid', 'PUT'] as const
}

export function getPutCollectionsCollectionUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCollectionsCollectionUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_uid']['$put']>,
    ) {
      return parseResponse(client.collections[':collection_uid'].$put(args, options))
    },
  })
}

export function createPutCollectionsCollectionUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_uid']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCollectionsCollectionUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCollectionsCollectionUidMutationKey() {
  return ['collections', '/collections/:collection_uid', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collection_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_uid']['$delete']>,
    ) {
      return parseResponse(client.collections[':collection_uid'].$delete(args, options))
    },
  })
}

export function createDeleteCollectionsCollectionUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_uid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections)[':collection_uid']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCollectionsCollectionUidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvironmentsQueryKey() {
  return ['environments', '/environments'] as const
}

export function getEnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsQueryKey>
  >({
    queryKey: getEnvironmentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.environments.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEnvironmentsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnvironmentsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostEnvironmentsMutationKey() {
  return ['environments', '/environments', 'POST'] as const
}

export function getPostEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.environments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnvironmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.environments.$post>) {
      return parseResponse(client.environments.$post(args, options))
    },
  })
}

export function createPostEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.environments.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEnvironmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvironmentsEnvironmentUidQueryKey(
  args: InferRequestType<(typeof client.environments)[':environment_uid']['$get']>,
) {
  return ['environments', '/environments/:environment_uid', args] as const
}

export function getEnvironmentsEnvironmentUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.environments)[':environment_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentsEnvironmentUidQueryKey>
  >({
    queryKey: getEnvironmentsEnvironmentUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.environments[':environment_uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentsEnvironmentUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.environments)[':environment_uid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEnvironmentsEnvironmentUidQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnvironmentsEnvironmentUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutEnvironmentsEnvironmentUidMutationKey() {
  return ['environments', '/environments/:environment_uid', 'PUT'] as const
}

export function getPutEnvironmentsEnvironmentUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.environments)[':environment_uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEnvironmentsEnvironmentUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environments)[':environment_uid']['$put']>,
    ) {
      return parseResponse(client.environments[':environment_uid'].$put(args, options))
    },
  })
}

export function createPutEnvironmentsEnvironmentUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.environments)[':environment_uid']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEnvironmentsEnvironmentUidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteEnvironmentsEnvironmentUidMutationKey() {
  return ['environments', '/environments/:environment_uid', 'DELETE'] as const
}

export function getDeleteEnvironmentsEnvironmentUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.environments)[':environment_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnvironmentsEnvironmentUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.environments)[':environment_uid']['$delete']>,
    ) {
      return parseResponse(client.environments[':environment_uid'].$delete(args, options))
    },
  })
}

export function createDeleteEnvironmentsEnvironmentUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.environments)[':environment_uid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.environments)[':environment_uid']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEnvironmentsEnvironmentUidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostImportExportedMutationKey() {
  return ['import', '/import/exported', 'POST'] as const
}

export function getPostImportExportedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.exported.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostImportExportedMutationKey(),
    async mutationFn() {
      return parseResponse(client.import.exported.$post(undefined, options))
    },
  })
}

export function createPostImportExported<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.import.exported.$post>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostImportExportedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostImportOpenapiMutationKey() {
  return ['import', '/import/openapi', 'POST'] as const
}

export function getPostImportOpenapiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.openapi.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.import.openapi.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportOpenapiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.import.openapi.$post>) {
      return parseResponse(client.import.openapi.$post(args, options))
    },
  })
}

export function createPostImportOpenapi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.import.openapi.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.import.openapi.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostImportOpenapiMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getMeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMocksQueryKey() {
  return ['mocks', '/mocks'] as const
}

export function getMocksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMocksQueryKey>
  >({
    queryKey: getMocksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mocks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMocks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getMocksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMocksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostMocksMutationKey() {
  return ['mocks', '/mocks', 'POST'] as const
}

export function getPostMocksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$post>>>>>,
    TError,
    InferRequestType<typeof client.mocks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMocksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mocks.$post>) {
      return parseResponse(client.mocks.$post(args, options))
    },
  })
}

export function createPostMocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mocks.$post>>>>>,
          TError,
          InferRequestType<typeof client.mocks.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMocksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMocksMockUidQueryKey(
  args: InferRequestType<(typeof client.mocks)[':mock_uid']['$get']>,
) {
  return ['mocks', '/mocks/:mock_uid', args] as const
}

export function getMocksMockUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mocks)[':mock_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMocksMockUidQueryKey>
  >({
    queryKey: getMocksMockUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mocks[':mock_uid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMocksMockUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.mocks)[':mock_uid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMocksMockUidQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMocksMockUidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutMocksMockUidMutationKey() {
  return ['mocks', '/mocks/:mock_uid', 'PUT'] as const
}

export function getPutMocksMockUidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.mocks)[':mock_uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMocksMockUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mocks)[':mock_uid']['$put']>) {
      return parseResponse(client.mocks[':mock_uid'].$put(args, options))
    },
  })
}

export function createPutMocksMockUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.mocks)[':mock_uid']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMocksMockUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteMocksMockUidMutationKey() {
  return ['mocks', '/mocks/:mock_uid', 'DELETE'] as const
}

export function getDeleteMocksMockUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.mocks)[':mock_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMocksMockUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.mocks)[':mock_uid']['$delete']>) {
      return parseResponse(client.mocks[':mock_uid'].$delete(args, options))
    },
  })
}

export function createDeleteMocksMockUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mocks)[':mock_uid']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMocksMockUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMocksMockUidPublishMutationKey() {
  return ['mocks', '/mocks/:mock_uid/publish', 'POST'] as const
}

export function getPostMocksMockUidPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mocks)[':mock_uid']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMocksMockUidPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mocks)[':mock_uid']['publish']['$post']>,
    ) {
      return parseResponse(client.mocks[':mock_uid'].publish.$post(args, options))
    },
  })
}

export function createPostMocksMockUidPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['publish']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mocks)[':mock_uid']['publish']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMocksMockUidPublishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteMocksMockUidUnpublishMutationKey() {
  return ['mocks', '/mocks/:mock_uid/unpublish', 'DELETE'] as const
}

export function getDeleteMocksMockUidUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMocksMockUidUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>,
    ) {
      return parseResponse(client.mocks[':mock_uid'].unpublish.$delete(args, options))
    },
  })
}

export function createDeleteMocksMockUidUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMocksMockUidUnpublishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMonitorsQueryKey() {
  return ['monitors', '/monitors'] as const
}

export function getMonitorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMonitorsQueryKey>
  >({
    queryKey: getMonitorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.monitors.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMonitors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMonitorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMonitorsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostMonitorsMutationKey() {
  return ['monitors', '/monitors', 'POST'] as const
}

export function getPostMonitorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$post>>>>>,
    TError,
    InferRequestType<typeof client.monitors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.monitors.$post>) {
      return parseResponse(client.monitors.$post(args, options))
    },
  })
}

export function createPostMonitors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.monitors.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMonitorsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMonitorsMonitorUidQueryKey(
  args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$get']>,
) {
  return ['monitors', '/monitors/:monitor_uid', args] as const
}

export function getMonitorsMonitorUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorsMonitorUidQueryKey>
  >({
    queryKey: getMonitorsMonitorUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.monitors[':monitor_uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMonitorsMonitorUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.monitors)[':monitor_uid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMonitorsMonitorUidQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMonitorsMonitorUidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutMonitorsMonitorUidMutationKey() {
  return ['monitors', '/monitors/:monitor_uid', 'PUT'] as const
}

export function getPutMonitorsMonitorUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.monitors)[':monitor_uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMonitorsMonitorUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$put']>) {
      return parseResponse(client.monitors[':monitor_uid'].$put(args, options))
    },
  })
}

export function createPutMonitorsMonitorUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.monitors)[':monitor_uid']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMonitorsMonitorUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteMonitorsMonitorUidMutationKey() {
  return ['monitors', '/monitors/:monitor_uid', 'DELETE'] as const
}

export function getDeleteMonitorsMonitorUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.monitors)[':monitor_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMonitorsMonitorUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$delete']>) {
      return parseResponse(client.monitors[':monitor_uid'].$delete(args, options))
    },
  })
}

export function createDeleteMonitorsMonitorUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.monitors)[':monitor_uid']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMonitorsMonitorUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMonitorsMonitorUidRunMutationKey() {
  return ['monitors', '/monitors/:monitor_uid/run', 'POST'] as const
}

export function getPostMonitorsMonitorUidRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.monitors)[':monitor_uid']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitorsMonitorUidRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.monitors)[':monitor_uid']['run']['$post']>,
    ) {
      return parseResponse(client.monitors[':monitor_uid'].run.$post(args, options))
    },
  })
}

export function createPostMonitorsMonitorUidRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitors)[':monitor_uid']['run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.monitors)[':monitor_uid']['run']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMonitorsMonitorUidRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function createPostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkspacesQueryKey() {
  return ['workspaces', '/workspaces'] as const
}

export function getWorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkspacesQueryKey>
  >({
    queryKey: getWorkspacesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkspacesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostWorkspacesMutationKey() {
  return ['workspaces', '/workspaces', 'POST'] as const
}

export function getPostWorkspacesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>>,
    TError,
    InferRequestType<typeof client.workspaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workspaces.$post>) {
      return parseResponse(client.workspaces.$post(args, options))
    },
  })
}

export function createPostWorkspaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.workspaces.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkspacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceIdQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_id', args] as const
}

export function getWorkspacesWorkspaceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWorkspacesWorkspaceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutWorkspacesWorkspaceIdMutationKey() {
  return ['workspaces', '/workspaces/:workspace_id', 'PUT'] as const
}

export function getPutWorkspacesWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$put']>) {
      return parseResponse(client.workspaces[':workspace_id'].$put(args, options))
    },
  })
}

export function createPutWorkspacesWorkspaceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace_id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWorkspacesWorkspaceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteWorkspacesWorkspaceIdMutationKey() {
  return ['workspaces', '/workspaces/:workspace_id', 'DELETE'] as const
}

export function getDeleteWorkspacesWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$delete']>,
    ) {
      return parseResponse(client.workspaces[':workspace_id'].$delete(args, options))
    },
  })
}

export function createDeleteWorkspacesWorkspaceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWorkspacesWorkspaceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
