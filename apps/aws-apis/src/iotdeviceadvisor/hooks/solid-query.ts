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

export function getEndpointKey() {
  return ['endpoint'] as const
}

export function getSuiteDefinitionsKey() {
  return ['suiteDefinitions'] as const
}

export function getSuiteRunsKey() {
  return ['suiteRuns'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getSuiteDefinitionsQueryKey(
  args: InferRequestType<typeof client.suiteDefinitions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['suiteDefinitions', '/suiteDefinitions', keyArgs] as const
}

export function getSuiteDefinitionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.suiteDefinitions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSuiteDefinitionsQueryKey>
  >({
    queryKey: getSuiteDefinitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suiteDefinitions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSuiteDefinitions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suiteDefinitions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSuiteDefinitionsQueryKey>
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
    return { ...getSuiteDefinitionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSuiteDefinitionsMutationKey() {
  return ['suiteDefinitions', '/suiteDefinitions', 'POST'] as const
}

export function getPostSuiteDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.suiteDefinitions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSuiteDefinitionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suiteDefinitions.$post>) {
      return parseResponse(client.suiteDefinitions.$post(args, options))
    },
  })
}

export function createPostSuiteDefinitions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.suiteDefinitions.$post>,
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
    const mutationDefaults = getPostSuiteDefinitionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSuiteDefinitionsSuiteDefinitionIdQueryKey(
  args: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['suiteDefinitions', '/suiteDefinitions/:suiteDefinitionId', keyArgs] as const
}

export function getSuiteDefinitionsSuiteDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuiteDefinitionsSuiteDefinitionIdQueryKey>
  >({
    queryKey: getSuiteDefinitionsSuiteDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suiteDefinitions[':suiteDefinitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuiteDefinitionsSuiteDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSuiteDefinitionsSuiteDefinitionIdQueryKey>
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
      ...getSuiteDefinitionsSuiteDefinitionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteSuiteDefinitionsSuiteDefinitionIdMutationKey() {
  return ['suiteDefinitions', '/suiteDefinitions/:suiteDefinitionId', 'DELETE'] as const
}

export function getDeleteSuiteDefinitionsSuiteDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSuiteDefinitionsSuiteDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$delete']>,
    ) {
      return parseResponse(client.suiteDefinitions[':suiteDefinitionId'].$delete(args, options))
    },
  })
}

export function createDeleteSuiteDefinitionsSuiteDefinitionId<
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
                  ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$delete']>,
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
    const mutationDefaults = getDeleteSuiteDefinitionsSuiteDefinitionIdMutationOptions<
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

export function getPatchSuiteDefinitionsSuiteDefinitionIdMutationKey() {
  return ['suiteDefinitions', '/suiteDefinitions/:suiteDefinitionId', 'PATCH'] as const
}

export function getPatchSuiteDefinitionsSuiteDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSuiteDefinitionsSuiteDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$patch']>,
    ) {
      return parseResponse(client.suiteDefinitions[':suiteDefinitionId'].$patch(args, options))
    },
  })
}

export function createPatchSuiteDefinitionsSuiteDefinitionId<
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
                  ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$patch']>,
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
    const mutationDefaults = getPatchSuiteDefinitionsSuiteDefinitionIdMutationOptions<
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

export function getEndpointQueryKey(args: InferRequestType<typeof client.endpoint.$get>) {
  const { header: _, ...keyArgs } = args
  return ['endpoint', '/endpoint', keyArgs] as const
}

export function getEndpointQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.endpoint.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEndpointQueryKey>
  >({
    queryKey: getEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.endpoint.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEndpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.endpoint.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEndpointQueryKey>
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
    return { ...getEndpointQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryKey(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'suiteDefinitions',
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId',
    keyArgs,
  ] as const
}

export function getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryKey>
  >({
    queryKey: getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
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
                    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryKey>
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
      ...getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryKey(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'suiteDefinitions',
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId/report',
    keyArgs,
  ] as const
}

export function getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryKey>
  >({
    queryKey: getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].report.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
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
                    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryKey>
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
      ...getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSuiteRunsQueryKey(args: InferRequestType<typeof client.suiteRuns.$get>) {
  const { header: _, ...keyArgs } = args
  return ['suiteRuns', '/suiteRuns', keyArgs] as const
}

export function getSuiteRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.suiteRuns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuiteRunsQueryKey>
  >({
    queryKey: getSuiteRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suiteRuns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSuiteRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.suiteRuns.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSuiteRunsQueryKey>
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
    return { ...getSuiteRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsMutationKey() {
  return ['suiteDefinitions', '/suiteDefinitions/:suiteDefinitionId/suiteRuns', 'POST'] as const
}

export function getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns']['$post']
      >,
    ) {
      return parseResponse(
        client.suiteDefinitions[':suiteDefinitionId'].suiteRuns.$post(args, options),
      )
    },
  })
}

export function createPostSuiteDefinitionsSuiteDefinitionIdSuiteRuns<
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
                    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns']['$post']
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
    const mutationDefaults = getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsMutationOptions<
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

export function getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopMutationKey() {
  return [
    'suiteDefinitions',
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId/stop',
    'POST',
  ] as const
}

export function getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['stop']['$post']
      >,
    ) {
      return parseResponse(
        client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].stop.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStop<
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
                    (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['stop']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['stop']['$post']
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
      getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDeleteTagsResourceArnTagKeys<
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
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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
