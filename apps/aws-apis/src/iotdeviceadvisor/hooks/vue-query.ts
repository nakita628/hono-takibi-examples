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
  args: MaybeRefOrGetter<InferRequestType<typeof client.suiteDefinitions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suiteDefinitions', '/suiteDefinitions', keyArgs] as const
}

export function getSuiteDefinitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suiteDefinitions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuiteDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suiteDefinitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuiteDefinitions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suiteDefinitions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>
            >
          >,
          ReturnType<typeof getSuiteDefinitionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSuiteDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuiteDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suiteDefinitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSuiteDefinitions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.suiteDefinitions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.suiteDefinitions.$post>,
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
  const mutationDefaults = getPostSuiteDefinitionsMutationOptions<TError, TOnMutateResult>(
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

export function getSuiteDefinitionsSuiteDefinitionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suiteDefinitions', '/suiteDefinitions/:suiteDefinitionId', keyArgs] as const
}

export function getSuiteDefinitionsSuiteDefinitionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuiteDefinitionsSuiteDefinitionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suiteDefinitions[':suiteDefinitionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuiteDefinitionsSuiteDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSuiteDefinitionsSuiteDefinitionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.suiteDefinitions)[':suiteDefinitionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuiteDefinitionsSuiteDefinitionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuiteDefinitionsSuiteDefinitionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suiteDefinitions[':suiteDefinitionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSuiteDefinitionsSuiteDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteSuiteDefinitionsSuiteDefinitionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchSuiteDefinitionsSuiteDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchSuiteDefinitionsSuiteDefinitionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEndpointQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoint.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['endpoint', '/endpoint', keyArgs] as const
}

export function getEndpointQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoint.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoint.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEndpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.endpoint.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>
          >,
          ReturnType<typeof getEndpointQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoint.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoint.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'suiteDefinitions',
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId',
    keyArgs,
  ] as const
}

export function getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'suiteDefinitions',
    '/suiteDefinitions/:suiteDefinitionId/suiteRuns/:suiteRunId/report',
    keyArgs,
  ] as const
}

export function getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].report.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReport<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.suiteDefinitions)[':suiteDefinitionId']['suiteRuns'][':suiteRunId']['report']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.suiteDefinitions[':suiteDefinitionId'].suiteRuns[':suiteRunId'].report.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSuiteRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suiteRuns.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['suiteRuns', '/suiteRuns', keyArgs] as const
}

export function getSuiteRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suiteRuns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuiteRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suiteRuns.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSuiteRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.suiteRuns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>
          >,
          ReturnType<typeof getSuiteRunsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suiteRuns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuiteRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuiteRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suiteRuns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function usePostSuiteDefinitionsSuiteDefinitionIdSuiteRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults =
    getPostSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
