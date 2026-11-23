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

export function getAnalysesKey() {
  return ['analyses'] as const
}

export function getCodereviewsKey() {
  return ['codereviews'] as const
}

export function getIssuesKey() {
  return ['issues'] as const
}

export function getOpenapiKey() {
  return ['openapi'] as const
}

export function getOperationsKey() {
  return ['operations'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getQueryjobsKey() {
  return ['queryjobs'] as const
}

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesAnalysisIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analyses)[':analysis-id']['$get']>>,
) {
  return ['analyses', '/analyses/:analysis-id', toValue(args)] as const
}

export function getAnalysesAnalysisIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analyses)[':analysis-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalysesAnalysisIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':analysis-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalysesAnalysisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analyses)[':analysis-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnalysesAnalysisIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesAnalysisIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalysesAnalysisIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':analysis-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesAnalysisIdAlertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>
  >,
) {
  return ['analyses', '/analyses/:analysis-id/alerts', toValue(args)] as const
}

export function getAnalysesAnalysisIdAlertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalysesAnalysisIdAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':analysis-id'].alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalysesAnalysisIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnalysesAnalysisIdAlertsQueryKey>
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
          Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesAnalysisIdAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalysesAnalysisIdAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':analysis-id'].alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnalysesProjectIdMutationKey() {
  return ['analyses', '/analyses/:project-id', 'POST'] as const
}

export function getPostAnalysesProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.analyses)[':project-id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.analyses)[':project-id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalysesProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.analyses)[':project-id']['$post']>) {
      return parseResponse(client.analyses[':project-id'].$post(args, options))
    },
  })
}

export function usePostAnalysesProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analyses)[':project-id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.analyses)[':project-id']['$post']>,
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
  const mutationDefaults = getPostAnalysesProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getAnalysesProjectIdCommitsCommitIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']>
  >,
) {
  return ['analyses', '/analyses/:project-id/commits/:commit-id', toValue(args)] as const
}

export function getAnalysesProjectIdCommitsCommitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalysesProjectIdCommitsCommitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':project-id'].commits[':commit-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalysesProjectIdCommitsCommitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']>
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
                    (typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']
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
                    (typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnalysesProjectIdCommitsCommitIdQueryKey>
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
            ReturnType<(typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesProjectIdCommitsCommitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalysesProjectIdCommitsCommitIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':project-id'].commits[':commit-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCodereviewsProjectIdMutationKey() {
  return ['codereviews', '/codereviews/:project-id', 'POST'] as const
}

export function getPostCodereviewsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.codereviews)[':project-id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.codereviews)[':project-id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCodereviewsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.codereviews)[':project-id']['$post']>) {
      return parseResponse(client.codereviews[':project-id'].$post(args, options))
    },
  })
}

export function usePostCodereviewsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.codereviews)[':project-id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.codereviews)[':project-id']['$post']>,
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
  const mutationDefaults = getPostCodereviewsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getCodereviewsReviewIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.codereviews)[':review-id']['$get']>>,
) {
  return ['codereviews', '/codereviews/:review-id', toValue(args)] as const
}

export function getCodereviewsReviewIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.codereviews)[':review-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCodereviewsReviewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.codereviews[':review-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCodereviewsReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.codereviews)[':review-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.codereviews)[':review-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.codereviews)[':review-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.codereviews)[':review-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCodereviewsReviewIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.codereviews)[':review-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCodereviewsReviewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCodereviewsReviewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.codereviews[':review-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIssuesProjectIdAlertKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.issues)[':project-id'][':alert-key']['$get']>
  >,
) {
  return ['issues', '/issues/:project-id/:alert-key', toValue(args)] as const
}

export function getIssuesProjectIdAlertKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.issues)[':project-id'][':alert-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssuesProjectIdAlertKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issues[':project-id'][':alert-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssuesProjectIdAlertKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.issues)[':project-id'][':alert-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.issues)[':project-id'][':alert-key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.issues)[':project-id'][':alert-key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.issues)[':project-id'][':alert-key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIssuesProjectIdAlertKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.issues)[':project-id'][':alert-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssuesProjectIdAlertKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssuesProjectIdAlertKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.issues[':project-id'][':alert-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenapiQueryKey() {
  return ['openapi', '/openapi'] as const
}

export function getOpenapiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.openapi.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
          >,
          ReturnType<typeof getOpenapiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenapiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.openapi.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOperationsOperationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.operations)[':operation-id']['$get']>>,
) {
  return ['operations', '/operations/:operation-id', toValue(args)] as const
}

export function getOperationsOperationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.operations)[':operation-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOperationsOperationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.operations[':operation-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':operation-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.operations)[':operation-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.operations)[':operation-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.operations)[':operation-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOperationsOperationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.operations)[':operation-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationsOperationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOperationsOperationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.operations[':operation-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
) {
  return ['projects', '/projects', toValue(args)] as const
}

export function getProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
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
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':project-id']['$get']>>,
) {
  return ['projects', '/projects/:project-id', toValue(args)] as const
}

export function getProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':project-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':project-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:project-id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':project-id']['$delete']>) {
      return parseResponse(client.projects[':project-id'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project-id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':project-id']['$delete']>,
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
  const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdSettingsAnalysisConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:project-id/settings/analysis-configuration',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdSettingsAnalysisConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdSettingsAnalysisConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project-id'].settings['analysis-configuration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdSettingsAnalysisConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
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
                    (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
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
                    (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdSettingsAnalysisConfigurationQueryKey>
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
              (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdSettingsAnalysisConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdSettingsAnalysisConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project-id'].settings['analysis-configuration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectIdSettingsAnalysisConfigurationMutationKey() {
  return ['projects', '/projects/:project-id/settings/analysis-configuration', 'PUT'] as const
}

export function getPutProjectsProjectIdSettingsAnalysisConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdSettingsAnalysisConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':project-id'].settings['analysis-configuration'].$put(args, options),
      )
    },
  })
}

export function usePutProjectsProjectIdSettingsAnalysisConfiguration<
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
                    (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$put']
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
  const mutationDefaults = getPutProjectsProjectIdSettingsAnalysisConfigurationMutationOptions<
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

export function getProjectsProviderOrgNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':provider'][':org'][':name']['$get']>
  >,
) {
  return ['projects', '/projects/:provider/:org/:name', toValue(args)] as const
}

export function getProjectsProviderOrgNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':provider'][':org'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProviderOrgNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':provider'][':org'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProviderOrgName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':provider'][':org'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':provider'][':org'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':provider'][':org'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':provider'][':org'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProviderOrgNameQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':provider'][':org'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProviderOrgNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProviderOrgNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':provider'][':org'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostQueryjobsMutationKey() {
  return ['queryjobs', '/queryjobs', 'POST'] as const
}

export function getPostQueryjobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queryjobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.queryjobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryjobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.queryjobs.$post>) {
      return parseResponse(client.queryjobs.$post(args, options))
    },
  })
}

export function usePostQueryjobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queryjobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.queryjobs.$post>,
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
  const mutationDefaults = getPostQueryjobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryjobsQueryjobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queryjobs)[':queryjob-id']['$get']>>,
) {
  return ['queryjobs', '/queryjobs/:queryjob-id', toValue(args)] as const
}

export function getQueryjobsQueryjobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queryjobs)[':queryjob-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryjobsQueryjobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queryjobs[':queryjob-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryjobsQueryjobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queryjobs)[':queryjob-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueryjobsQueryjobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryjobsQueryjobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryjobsQueryjobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queryjobs[':queryjob-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryjobsQueryjobIdResultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>
  >,
) {
  return ['queryjobs', '/queryjobs/:queryjob-id/results', toValue(args)] as const
}

export function getQueryjobsQueryjobIdResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryjobsQueryjobIdResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queryjobs[':queryjob-id'].results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryjobsQueryjobIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueryjobsQueryjobIdResultsQueryKey>
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
          Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryjobsQueryjobIdResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryjobsQueryjobIdResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queryjobs[':queryjob-id'].results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryjobsQueryjobIdResultsProjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']>
  >,
) {
  return ['queryjobs', '/queryjobs/:queryjob-id/results/:project-id', toValue(args)] as const
}

export function getQueryjobsQueryjobIdResultsProjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryjobsQueryjobIdResultsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queryjobs[':queryjob-id'].results[':project-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryjobsQueryjobIdResultsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']>
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
                    (typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']
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
                    (typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getQueryjobsQueryjobIdResultsProjectIdQueryKey>
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
            ReturnType<(typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryjobsQueryjobIdResultsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryjobsQueryjobIdResultsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queryjobs[':queryjob-id'].results[':project-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSnapshotsUploadsSessionIdMutationKey() {
  return ['snapshots', '/snapshots/uploads/:session-id', 'PUT'] as const
}

export function getPutSnapshotsUploadsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots.uploads)[':session-id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSnapshotsUploadsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$put']>,
    ) {
      return parseResponse(client.snapshots.uploads[':session-id'].$put(args, options))
    },
  })
}

export function usePutSnapshotsUploadsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.snapshots.uploads)[':session-id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$put']>,
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
  const mutationDefaults = getPutSnapshotsUploadsSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSnapshotsUploadsSessionIdMutationKey() {
  return ['snapshots', '/snapshots/uploads/:session-id', 'POST'] as const
}

export function getPostSnapshotsUploadsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshots.uploads)[':session-id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotsUploadsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$post']>,
    ) {
      return parseResponse(client.snapshots.uploads[':session-id'].$post(args, options))
    },
  })
}

export function usePostSnapshotsUploadsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots.uploads)[':session-id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$post']>,
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
  const mutationDefaults = getPostSnapshotsUploadsSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSnapshotsUploadsSessionIdMutationKey() {
  return ['snapshots', '/snapshots/uploads/:session-id', 'DELETE'] as const
}

export function getDeleteSnapshotsUploadsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshots.uploads)[':session-id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnapshotsUploadsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$delete']>,
    ) {
      return parseResponse(client.snapshots.uploads[':session-id'].$delete(args, options))
    },
  })
}

export function useDeleteSnapshotsUploadsSessionId<
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
                Awaited<ReturnType<(typeof client.snapshots.uploads)[':session-id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshots.uploads)[':session-id']['$delete']>,
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
  const mutationDefaults = getDeleteSnapshotsUploadsSessionIdMutationOptions<
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

export function getSnapshotsProjectIdLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$get']>
  >,
) {
  return ['snapshots', '/snapshots/:project-id/:language', toValue(args)] as const
}

export function getSnapshotsProjectIdLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapshotsProjectIdLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshots[':project-id'][':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnapshotsProjectIdLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':project-id'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':project-id'][':language']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':project-id'][':language']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSnapshotsProjectIdLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.snapshots)[':project-id'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsProjectIdLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapshotsProjectIdLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshots[':project-id'][':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSnapshotsProjectIdLanguageMutationKey() {
  return ['snapshots', '/snapshots/:project-id/:language', 'POST'] as const
}

export function getPostSnapshotsProjectIdLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshots)[':project-id'][':language']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotsProjectIdLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$post']>,
    ) {
      return parseResponse(client.snapshots[':project-id'][':language'].$post(args, options))
    },
  })
}

export function usePostSnapshotsProjectIdLanguage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':project-id'][':language']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$post']>,
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
  const mutationDefaults = getPostSnapshotsProjectIdLanguageMutationOptions<
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

export function getSystemHealthQueryKey() {
  return ['system', '/system/health'] as const
}

export function getSystemHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
          >,
          ReturnType<typeof getSystemHealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemMetricsQueryKey() {
  return ['system', '/system/metrics'] as const
}

export function getSystemMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.metrics.$get>>>>
          >,
          ReturnType<typeof getSystemMetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemMetricsMetricIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.system.metrics)[':metric-id']['$get']>>,
) {
  return ['system', '/system/metrics/:metric-id', toValue(args)] as const
}

export function getSystemMetricsMetricIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.system.metrics)[':metric-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemMetricsMetricIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.metrics[':metric-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemMetricsMetricId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.metrics)[':metric-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.system.metrics)[':metric-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.metrics)[':metric-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.metrics)[':metric-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSystemMetricsMetricIdQueryKey>
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
          Awaited<ReturnType<(typeof client.system.metrics)[':metric-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemMetricsMetricIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemMetricsMetricIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.system.metrics[':metric-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
