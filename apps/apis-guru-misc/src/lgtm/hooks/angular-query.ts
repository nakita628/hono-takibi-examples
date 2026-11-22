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

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAnalysesAnalysisIdQueryKey(
  args: InferRequestType<(typeof client.analyses)[':analysis-id']['$get']>,
) {
  return ['analyses', '/analyses/:analysis-id', args] as const
}

export function getAnalysesAnalysisIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analyses)[':analysis-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesAnalysisIdQueryKey>
  >({
    queryKey: getAnalysesAnalysisIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':analysis-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnalysesAnalysisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analyses)[':analysis-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesAnalysisIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnalysesAnalysisIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAnalysesAnalysisIdAlertsQueryKey(
  args: InferRequestType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>,
) {
  return ['analyses', '/analyses/:analysis-id/alerts', args] as const
}

export function getAnalysesAnalysisIdAlertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalysesAnalysisIdAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':analysis-id'].alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnalysesAnalysisIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analyses)[':analysis-id']['alerts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAnalysesAnalysisIdAlertsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAnalysesProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnalysesProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAnalysesProjectIdCommitsCommitIdQueryKey(
  args: InferRequestType<(typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']>,
) {
  return ['analyses', '/analyses/:project-id/commits/:commit-id', args] as const
}

export function getAnalysesProjectIdCommitsCommitIdQueryOptions<
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
  args: InferRequestType<(typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalysesProjectIdCommitsCommitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':project-id'].commits[':commit-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnalysesProjectIdCommitsCommitId<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':project-id']['commits'][':commit-id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAnalysesProjectIdCommitsCommitIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostCodereviewsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCodereviewsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCodereviewsReviewIdQueryKey(
  args: InferRequestType<(typeof client.codereviews)[':review-id']['$get']>,
) {
  return ['codereviews', '/codereviews/:review-id', args] as const
}

export function getCodereviewsReviewIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.codereviews)[':review-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.codereviews)[':review-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.codereviews)[':review-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCodereviewsReviewIdQueryKey>
  >({
    queryKey: getCodereviewsReviewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.codereviews[':review-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCodereviewsReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.codereviews)[':review-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.codereviews)[':review-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.codereviews)[':review-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCodereviewsReviewIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCodereviewsReviewIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getIssuesProjectIdAlertKeyQueryKey(
  args: InferRequestType<(typeof client.issues)[':project-id'][':alert-key']['$get']>,
) {
  return ['issues', '/issues/:project-id/:alert-key', args] as const
}

export function getIssuesProjectIdAlertKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.issues)[':project-id'][':alert-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.issues)[':project-id'][':alert-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getIssuesProjectIdAlertKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.issues[':project-id'][':alert-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIssuesProjectIdAlertKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.issues)[':project-id'][':alert-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.issues)[':project-id'][':alert-key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getIssuesProjectIdAlertKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOpenapiQueryKey() {
  return ['openapi', '/openapi'] as const
}

export function getOpenapiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenapiQueryKey>
  >({
    queryKey: getOpenapiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.openapi.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOpenapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOpenapiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenapiQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getOperationsOperationIdQueryKey(
  args: InferRequestType<(typeof client.operations)[':operation-id']['$get']>,
) {
  return ['operations', '/operations/:operation-id', args] as const
}

export function getOperationsOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':operation-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.operations)[':operation-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOperationsOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operations[':operation-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.operations)[':operation-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.operations)[':operation-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getOperationsOperationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getProjectsQueryKey(args: InferRequestType<typeof client.projects.$get>) {
  return ['projects', '/projects', args] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.$post>,
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
    const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':project-id']['$get']>,
) {
  return ['projects', '/projects/:project-id', args] as const
}

export function getProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >({
    queryKey: getProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':project-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsProjectIdSettingsAnalysisConfigurationQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
  >,
) {
  return ['projects', '/projects/:project-id/settings/analysis-configuration', args] as const
}

export function getProjectsProjectIdSettingsAnalysisConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdSettingsAnalysisConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project-id'].settings['analysis-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProjectIdSettingsAnalysisConfiguration<
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
  args: () => InferRequestType<
    (typeof client.projects)[':project-id']['settings']['analysis-configuration']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProjectIdSettingsAnalysisConfigurationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutProjectsProjectIdSettingsAnalysisConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsProjectIdSettingsAnalysisConfigurationMutationOptions<
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

export function getProjectsProviderOrgNameQueryKey(
  args: InferRequestType<(typeof client.projects)[':provider'][':org'][':name']['$get']>,
) {
  return ['projects', '/projects/:provider/:org/:name', args] as const
}

export function getProjectsProviderOrgNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':provider'][':org'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':provider'][':org'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProviderOrgNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':provider'][':org'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProjectsProviderOrgName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':provider'][':org'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':provider'][':org'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getProjectsProviderOrgNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostQueryjobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queryjobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.queryjobs.$post>,
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
    const mutationDefaults = getPostQueryjobsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getQueryjobsQueryjobIdQueryKey(
  args: InferRequestType<(typeof client.queryjobs)[':queryjob-id']['$get']>,
) {
  return ['queryjobs', '/queryjobs/:queryjob-id', args] as const
}

export function getQueryjobsQueryjobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queryjobs)[':queryjob-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryjobsQueryjobIdQueryKey>
  >({
    queryKey: getQueryjobsQueryjobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queryjobs[':queryjob-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQueryjobsQueryjobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.queryjobs)[':queryjob-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueryjobsQueryjobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryjobsQueryjobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getQueryjobsQueryjobIdResultsQueryKey(
  args: InferRequestType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>,
) {
  return ['queryjobs', '/queryjobs/:queryjob-id/results', args] as const
}

export function getQueryjobsQueryjobIdResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getQueryjobsQueryjobIdResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queryjobs[':queryjob-id'].results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQueryjobsQueryjobIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.queryjobs)[':queryjob-id']['results']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getQueryjobsQueryjobIdResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getQueryjobsQueryjobIdResultsProjectIdQueryKey(
  args: InferRequestType<
    (typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']
  >,
) {
  return ['queryjobs', '/queryjobs/:queryjob-id/results/:project-id', args] as const
}

export function getQueryjobsQueryjobIdResultsProjectIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getQueryjobsQueryjobIdResultsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queryjobs[':queryjob-id'].results[':project-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQueryjobsQueryjobIdResultsProjectId<
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
  args: () => InferRequestType<
    (typeof client.queryjobs)[':queryjob-id']['results'][':project-id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getQueryjobsQueryjobIdResultsProjectIdQueryKey>
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
      ...getQueryjobsQueryjobIdResultsProjectIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutSnapshotsUploadsSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSnapshotsUploadsSessionIdMutationOptions<
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

export function injectPostSnapshotsUploadsSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSnapshotsUploadsSessionIdMutationOptions<
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

export function injectDeleteSnapshotsUploadsSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSnapshotsUploadsSessionIdMutationOptions<
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

export function getSnapshotsProjectIdLanguageQueryKey(
  args: InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$get']>,
) {
  return ['snapshots', '/snapshots/:project-id/:language', args] as const
}

export function getSnapshotsProjectIdLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':project-id'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnapshotsProjectIdLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots[':project-id'][':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSnapshotsProjectIdLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':project-id'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.snapshots)[':project-id'][':language']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSnapshotsProjectIdLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSnapshotsProjectIdLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSnapshotsProjectIdLanguageMutationOptions<
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

export function getSystemHealthQueryKey() {
  return ['system', '/system/health'] as const
}

export function getSystemHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemHealthQueryKey>
  >({
    queryKey: getSystemHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSystemHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSystemMetricsQueryKey() {
  return ['system', '/system/metrics'] as const
}

export function getSystemMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemMetricsQueryKey>
  >({
    queryKey: getSystemMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSystemMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.metrics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSystemMetricsMetricIdQueryKey(
  args: InferRequestType<(typeof client.system.metrics)[':metric-id']['$get']>,
) {
  return ['system', '/system/metrics/:metric-id', args] as const
}

export function getSystemMetricsMetricIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.metrics)[':metric-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.system.metrics)[':metric-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSystemMetricsMetricIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.system.metrics[':metric-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSystemMetricsMetricId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.metrics)[':metric-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.system.metrics)[':metric-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getSystemMetricsMetricIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
