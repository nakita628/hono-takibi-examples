import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getAssessmentFrameworkShareRequestsKey() {
  return ['assessmentFrameworkShareRequests'] as const
}

export function getAssessmentFrameworkShareRequestsRequestTypeKey() {
  return ['assessmentFrameworkShareRequests#requestType'] as const
}

export function getAssessmentFrameworksKey() {
  return ['assessmentFrameworks'] as const
}

export function getAssessmentFrameworksFrameworkTypeKey() {
  return ['assessmentFrameworks#frameworkType'] as const
}

export function getAssessmentReportsKey() {
  return ['assessmentReports'] as const
}

export function getAssessmentsKey() {
  return ['assessments'] as const
}

export function getControlsKey() {
  return ['controls'] as const
}

export function getControlsControlTypeKey() {
  return ['controls#controlType'] as const
}

export function getDataSourceKeywordsSourceKey() {
  return ['dataSourceKeywords#source'] as const
}

export function getDelegationsKey() {
  return ['delegations'] as const
}

export function getInsightsKey() {
  return ['insights'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutAssessmentsAssessmentIdAssociateToAssessmentReportMutationKey() {
  return ['assessments', '/assessments/:assessmentId/associateToAssessmentReport', 'PUT'] as const
}

export function getPutAssessmentsAssessmentIdAssociateToAssessmentReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['associateToAssessmentReport']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['associateToAssessmentReport']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentsAssessmentIdAssociateToAssessmentReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessments)[':assessmentId']['associateToAssessmentReport']['$put']
      >,
    ) {
      return parseResponse(
        client.assessments[':assessmentId'].associateToAssessmentReport.$put(args, options),
      )
    },
  })
}

export function createPutAssessmentsAssessmentIdAssociateToAssessmentReport<
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
                  (typeof client.assessments)[':assessmentId']['associateToAssessmentReport']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.assessments)[':assessmentId']['associateToAssessmentReport']['$put']
        >,
        TOnMutateResult
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
      getPutAssessmentsAssessmentIdAssociateToAssessmentReportMutationOptions<
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

export function getPutAssessmentsAssessmentIdBatchAssociateToAssessmentReportMutationKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/batchAssociateToAssessmentReport',
    'PUT',
  ] as const
}

export function getPutAssessmentsAssessmentIdBatchAssociateToAssessmentReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['batchAssociateToAssessmentReport']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['batchAssociateToAssessmentReport']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentsAssessmentIdBatchAssociateToAssessmentReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessments)[':assessmentId']['batchAssociateToAssessmentReport']['$put']
      >,
    ) {
      return parseResponse(
        client.assessments[':assessmentId'].batchAssociateToAssessmentReport.$put(args, options),
      )
    },
  })
}

export function createPutAssessmentsAssessmentIdBatchAssociateToAssessmentReport<
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
                  (typeof client.assessments)[':assessmentId']['batchAssociateToAssessmentReport']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.assessments)[':assessmentId']['batchAssociateToAssessmentReport']['$put']
        >,
        TOnMutateResult
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
      getPutAssessmentsAssessmentIdBatchAssociateToAssessmentReportMutationOptions<
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

export function getPutAssessmentsAssessmentIdDelegationsMutationKey() {
  return ['assessments', '/assessments/:assessmentId/delegations', 'PUT'] as const
}

export function getPutAssessmentsAssessmentIdDelegationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentsAssessmentIdDelegationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>,
    ) {
      return parseResponse(client.assessments[':assessmentId'].delegations.$put(args, options))
    },
  })
}

export function createPutAssessmentsAssessmentIdDelegations<
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
                ReturnType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAssessmentsAssessmentIdDelegationsMutationOptions<
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

export function getPostAssessmentsAssessmentIdDelegationsMutationKey() {
  return ['assessments', '/assessments/:assessmentId/delegations', 'POST'] as const
}

export function getPostAssessmentsAssessmentIdDelegationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['delegations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssessmentsAssessmentIdDelegationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$post']>,
    ) {
      return parseResponse(client.assessments[':assessmentId'].delegations.$post(args, options))
    },
  })
}

export function createPostAssessmentsAssessmentIdDelegations<
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
                ReturnType<(typeof client.assessments)[':assessmentId']['delegations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssessmentsAssessmentIdDelegationsMutationOptions<
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

export function getPutAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportMutationKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/batchDisassociateFromAssessmentReport',
    'PUT',
  ] as const
}

export function getPutAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['batchDisassociateFromAssessmentReport']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['batchDisassociateFromAssessmentReport']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessments)[':assessmentId']['batchDisassociateFromAssessmentReport']['$put']
      >,
    ) {
      return parseResponse(
        client.assessments[':assessmentId'].batchDisassociateFromAssessmentReport.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutAssessmentsAssessmentIdBatchDisassociateFromAssessmentReport<
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
                  (typeof client.assessments)[':assessmentId']['batchDisassociateFromAssessmentReport']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.assessments)[':assessmentId']['batchDisassociateFromAssessmentReport']['$put']
        >,
        TOnMutateResult
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
      getPutAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportMutationOptions<
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

export function getPostAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceMutationKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/controls/:controlId/evidence',
    'POST',
  ] as const
}

export function getPostAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['evidence']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['evidence']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['evidence']['$post']
      >,
    ) {
      return parseResponse(
        client.assessments[':assessmentId'].controlSets[':controlSetId'].controls[
          ':controlId'
        ].evidence.$post(args, options),
      )
    },
  })
}

export function createPostAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidence<
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
                  (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['evidence']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['evidence']['$post']
        >,
        TOnMutateResult
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
      getPostAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceMutationOptions<
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

export function getAssessmentsQueryKey(args: InferRequestType<typeof client.assessments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['assessments', '/assessments', keyArgs] as const
}

export function getAssessmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.assessments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssessmentsQueryKey>
  >({
    queryKey: getAssessmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assessments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssessments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.assessments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAssessmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssessmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAssessmentsMutationKey() {
  return ['assessments', '/assessments', 'POST'] as const
}

export function getPostAssessmentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$post>>>>>,
    TError,
    InferRequestType<typeof client.assessments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssessmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assessments.$post>) {
      return parseResponse(client.assessments.$post(args, options))
    },
  })
}

export function createPostAssessments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.assessments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssessmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssessmentFrameworksMutationKey() {
  return ['assessmentFrameworks', '/assessmentFrameworks', 'POST'] as const
}

export function getPostAssessmentFrameworksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assessmentFrameworks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.assessmentFrameworks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssessmentFrameworksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assessmentFrameworks.$post>) {
      return parseResponse(client.assessmentFrameworks.$post(args, options))
    },
  })
}

export function createPostAssessmentFrameworks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.assessmentFrameworks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.assessmentFrameworks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssessmentFrameworksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssessmentsAssessmentIdReportsMutationKey() {
  return ['assessments', '/assessments/:assessmentId/reports', 'POST'] as const
}

export function getPostAssessmentsAssessmentIdReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assessments)[':assessmentId']['reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssessmentsAssessmentIdReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assessments)[':assessmentId']['reports']['$post']>,
    ) {
      return parseResponse(client.assessments[':assessmentId'].reports.$post(args, options))
    },
  })
}

export function createPostAssessmentsAssessmentIdReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['reports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.assessments)[':assessmentId']['reports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssessmentsAssessmentIdReportsMutationOptions<
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

export function getPostControlsMutationKey() {
  return ['controls', '/controls', 'POST'] as const
}

export function getPostControlsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.controls.$post>>>>>,
    TError,
    InferRequestType<typeof client.controls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostControlsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.controls.$post>) {
      return parseResponse(client.controls.$post(args, options))
    },
  })
}

export function createPostControls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.controls.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.controls.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostControlsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAssessmentsAssessmentIdQueryKey(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assessments', '/assessments/:assessmentId', keyArgs] as const
}

export function getAssessmentsAssessmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentsAssessmentIdQueryKey>
  >({
    queryKey: getAssessmentsAssessmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assessments[':assessmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssessmentsAssessmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assessments)[':assessmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssessmentsAssessmentIdQueryKey>
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
      ...getAssessmentsAssessmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAssessmentsAssessmentIdMutationKey() {
  return ['assessments', '/assessments/:assessmentId', 'PUT'] as const
}

export function getPutAssessmentsAssessmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assessments)[':assessmentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentsAssessmentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assessments)[':assessmentId']['$put']>) {
      return parseResponse(client.assessments[':assessmentId'].$put(args, options))
    },
  })
}

export function createPutAssessmentsAssessmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.assessments)[':assessmentId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAssessmentsAssessmentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAssessmentsAssessmentIdMutationKey() {
  return ['assessments', '/assessments/:assessmentId', 'DELETE'] as const
}

export function getDeleteAssessmentsAssessmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assessments)[':assessmentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssessmentsAssessmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assessments)[':assessmentId']['$delete']>,
    ) {
      return parseResponse(client.assessments[':assessmentId'].$delete(args, options))
    },
  })
}

export function createDeleteAssessmentsAssessmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.assessments)[':assessmentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAssessmentsAssessmentIdMutationOptions<
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

export function getAssessmentFrameworksFrameworkIdQueryKey(
  args: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assessmentFrameworks', '/assessmentFrameworks/:frameworkId', keyArgs] as const
}

export function getAssessmentFrameworksFrameworkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentFrameworksFrameworkIdQueryKey>
  >({
    queryKey: getAssessmentFrameworksFrameworkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assessmentFrameworks[':frameworkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssessmentFrameworksFrameworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssessmentFrameworksFrameworkIdQueryKey>
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
      ...getAssessmentFrameworksFrameworkIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAssessmentFrameworksFrameworkIdMutationKey() {
  return ['assessmentFrameworks', '/assessmentFrameworks/:frameworkId', 'PUT'] as const
}

export function getPutAssessmentFrameworksFrameworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentFrameworksFrameworkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']>,
    ) {
      return parseResponse(client.assessmentFrameworks[':frameworkId'].$put(args, options))
    },
  })
}

export function createPutAssessmentFrameworksFrameworkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAssessmentFrameworksFrameworkIdMutationOptions<
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

export function getDeleteAssessmentFrameworksFrameworkIdMutationKey() {
  return ['assessmentFrameworks', '/assessmentFrameworks/:frameworkId', 'DELETE'] as const
}

export function getDeleteAssessmentFrameworksFrameworkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssessmentFrameworksFrameworkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>,
    ) {
      return parseResponse(client.assessmentFrameworks[':frameworkId'].$delete(args, options))
    },
  })
}

export function createDeleteAssessmentFrameworksFrameworkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAssessmentFrameworksFrameworkIdMutationOptions<
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

export function getDeleteAssessmentFrameworkShareRequestsRequestIdRequestTypeMutationKey() {
  return [
    'assessmentFrameworkShareRequests',
    '/assessmentFrameworkShareRequests/:requestId#requestType',
    'DELETE',
  ] as const
}

export function getDeleteAssessmentFrameworkShareRequestsRequestIdRequestTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessmentFrameworkShareRequests)[':requestId#requestType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.assessmentFrameworkShareRequests)[':requestId#requestType']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssessmentFrameworkShareRequestsRequestIdRequestTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessmentFrameworkShareRequests)[':requestId#requestType']['$delete']
      >,
    ) {
      return parseResponse(
        client.assessmentFrameworkShareRequests[':requestId#requestType'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAssessmentFrameworkShareRequestsRequestIdRequestType<
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
                  (typeof client.assessmentFrameworkShareRequests)[':requestId#requestType']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.assessmentFrameworkShareRequests)[':requestId#requestType']['$delete']
        >,
        TOnMutateResult
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
      getDeleteAssessmentFrameworkShareRequestsRequestIdRequestTypeMutationOptions<
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

export function getDeleteAssessmentsAssessmentIdReportsAssessmentReportIdMutationKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/reports/:assessmentReportId',
    'DELETE',
  ] as const
}

export function getDeleteAssessmentsAssessmentIdReportsAssessmentReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssessmentsAssessmentIdReportsAssessmentReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['$delete']
      >,
    ) {
      return parseResponse(
        client.assessments[':assessmentId'].reports[':assessmentReportId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAssessmentsAssessmentIdReportsAssessmentReportId<
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
                  (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['$delete']
        >,
        TOnMutateResult
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
      getDeleteAssessmentsAssessmentIdReportsAssessmentReportIdMutationOptions<
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

export function getControlsControlIdQueryKey(
  args: InferRequestType<(typeof client.controls)[':controlId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['controls', '/controls/:controlId', keyArgs] as const
}

export function getControlsControlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.controls)[':controlId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getControlsControlIdQueryKey>
  >({
    queryKey: getControlsControlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.controls[':controlId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createControlsControlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.controls)[':controlId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getControlsControlIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getControlsControlIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutControlsControlIdMutationKey() {
  return ['controls', '/controls/:controlId', 'PUT'] as const
}

export function getPutControlsControlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.controls)[':controlId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutControlsControlIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.controls)[':controlId']['$put']>) {
      return parseResponse(client.controls[':controlId'].$put(args, options))
    },
  })
}

export function createPutControlsControlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.controls)[':controlId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.controls)[':controlId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutControlsControlIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteControlsControlIdMutationKey() {
  return ['controls', '/controls/:controlId', 'DELETE'] as const
}

export function getDeleteControlsControlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.controls)[':controlId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteControlsControlIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.controls)[':controlId']['$delete']>) {
      return parseResponse(client.controls[':controlId'].$delete(args, options))
    },
  })
}

export function createDeleteControlsControlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.controls)[':controlId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.controls)[':controlId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteControlsControlIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountDeregisterAccountMutationKey() {
  return ['account', '/account/deregisterAccount', 'POST'] as const
}

export function getPostAccountDeregisterAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.deregisterAccount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.deregisterAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountDeregisterAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.deregisterAccount.$post>) {
      return parseResponse(client.account.deregisterAccount.$post(args, options))
    },
  })
}

export function createPostAccountDeregisterAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.deregisterAccount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.deregisterAccount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountDeregisterAccountMutationOptions<
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

export function getPostAccountDeregisterOrganizationAdminAccountMutationKey() {
  return ['account', '/account/deregisterOrganizationAdminAccount', 'POST'] as const
}

export function getPostAccountDeregisterOrganizationAdminAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.deregisterOrganizationAdminAccount.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.account.deregisterOrganizationAdminAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountDeregisterOrganizationAdminAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.account.deregisterOrganizationAdminAccount.$post>,
    ) {
      return parseResponse(client.account.deregisterOrganizationAdminAccount.$post(args, options))
    },
  })
}

export function createPostAccountDeregisterOrganizationAdminAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.deregisterOrganizationAdminAccount.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.account.deregisterOrganizationAdminAccount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountDeregisterOrganizationAdminAccountMutationOptions<
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

export function getPutAssessmentsAssessmentIdDisassociateFromAssessmentReportMutationKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/disassociateFromAssessmentReport',
    'PUT',
  ] as const
}

export function getPutAssessmentsAssessmentIdDisassociateFromAssessmentReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['disassociateFromAssessmentReport']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['disassociateFromAssessmentReport']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentsAssessmentIdDisassociateFromAssessmentReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessments)[':assessmentId']['disassociateFromAssessmentReport']['$put']
      >,
    ) {
      return parseResponse(
        client.assessments[':assessmentId'].disassociateFromAssessmentReport.$put(args, options),
      )
    },
  })
}

export function createPutAssessmentsAssessmentIdDisassociateFromAssessmentReport<
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
                  (typeof client.assessments)[':assessmentId']['disassociateFromAssessmentReport']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.assessments)[':assessmentId']['disassociateFromAssessmentReport']['$put']
        >,
        TOnMutateResult
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
      getPutAssessmentsAssessmentIdDisassociateFromAssessmentReportMutationOptions<
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

export function getAccountStatusQueryKey(
  args: InferRequestType<typeof client.account.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['account', '/account/status', keyArgs] as const
}

export function getAccountStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountStatusQueryKey>
  >({
    queryKey: getAccountStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryKey(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'assessments',
    '/assessments/:assessmentId/reports/:assessmentReportId/url',
    keyArgs,
  ] as const
}

export function getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryKey>
  >({
    queryKey: getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assessments[':assessmentId'].reports[':assessmentReportId'].url.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssessmentsAssessmentIdReportsAssessmentReportIdUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryKey>
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
      ...getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAssessmentsAssessmentIdChangelogsQueryKey(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assessments', '/assessments/:assessmentId/changelogs', keyArgs] as const
}

export function getAssessmentsAssessmentIdChangelogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentsAssessmentIdChangelogsQueryKey>
  >({
    queryKey: getAssessmentsAssessmentIdChangelogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assessments[':assessmentId'].changelogs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssessmentsAssessmentIdChangelogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssessmentsAssessmentIdChangelogsQueryKey>
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
      ...getAssessmentsAssessmentIdChangelogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDelegationsQueryKey(args: InferRequestType<typeof client.delegations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['delegations', '/delegations', keyArgs] as const
}

export function getDelegationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.delegations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDelegationsQueryKey>
  >({
    queryKey: getDelegationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.delegations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDelegations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.delegations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDelegationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDelegationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryKey(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/evidenceFolders/:evidenceFolderId/evidence/:evidenceId',
    keyArgs,
  ] as const
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryKey
    >
  >({
    queryKey:
      getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
          ':evidenceFolderId'
        ].evidence[':evidenceId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryKey
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
      ...getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryKey(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/evidenceFolders/:evidenceFolderId/evidence',
    keyArgs,
  ] as const
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryKey
    >
  >({
    queryKey:
      getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
          ':evidenceFolderId'
        ].evidence.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryKey
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
      ...getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryKey(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/evidenceFolders/:evidenceFolderId',
    keyArgs,
  ] as const
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryKey
    >
  >({
    queryKey:
      getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
          ':evidenceFolderId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryKey
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
      ...getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAssessmentsAssessmentIdEvidenceFoldersQueryKey(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assessments', '/assessments/:assessmentId/evidenceFolders', keyArgs] as const
}

export function getAssessmentsAssessmentIdEvidenceFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentsAssessmentIdEvidenceFoldersQueryKey>
  >({
    queryKey: getAssessmentsAssessmentIdEvidenceFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assessments[':assessmentId'].evidenceFolders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssessmentsAssessmentIdEvidenceFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssessmentsAssessmentIdEvidenceFoldersQueryKey>
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
      ...getAssessmentsAssessmentIdEvidenceFoldersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryKey(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'assessments',
    '/assessments/:assessmentId/evidenceFolders-by-assessment-control/:controlSetId/:controlId',
    keyArgs,
  ] as const
}

export function getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryKey
    >
  >({
    queryKey:
      getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.assessments[':assessmentId']['evidenceFolders-by-assessment-control'][
          ':controlSetId'
        ][':controlId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryKey
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
      ...getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInsightsQueryKey(args: InferRequestType<typeof client.insights.$get>) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights', keyArgs] as const
}

export function getInsightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.insights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInsightsQueryKey>
  >({
    queryKey: getInsightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInsights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.insights.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInsightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInsightsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInsightsAssessmentsAssessmentIdQueryKey(
  args: InferRequestType<(typeof client.insights.assessments)[':assessmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/assessments/:assessmentId', keyArgs] as const
}

export function getInsightsAssessmentsAssessmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights.assessments)[':assessmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsAssessmentsAssessmentIdQueryKey>
  >({
    queryKey: getInsightsAssessmentsAssessmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights.assessments[':assessmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsightsAssessmentsAssessmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.insights.assessments)[':assessmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsAssessmentsAssessmentIdQueryKey>
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
      ...getInsightsAssessmentsAssessmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountOrganizationAdminAccountQueryKey(
  args: InferRequestType<typeof client.account.organizationAdminAccount.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['account', '/account/organizationAdminAccount', keyArgs] as const
}

export function getAccountOrganizationAdminAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.organizationAdminAccount.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountOrganizationAdminAccountQueryKey>
  >({
    queryKey: getAccountOrganizationAdminAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.organizationAdminAccount.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountOrganizationAdminAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.organizationAdminAccount.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountOrganizationAdminAccountQueryKey>
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
      ...getAccountOrganizationAdminAccountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getServicesQueryKey(args: InferRequestType<typeof client.services.$get>) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services', keyArgs] as const
}

export function getServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >({
    queryKey: getServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.services.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSettingsAttributeQueryKey(
  args: InferRequestType<(typeof client.settings)[':attribute']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings/:attribute', keyArgs] as const
}

export function getSettingsAttributeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings)[':attribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsAttributeQueryKey>
  >({
    queryKey: getSettingsAttributeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings[':attribute'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSettingsAttribute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.settings)[':attribute']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsAttributeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsAttributeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryKey(
  args: InferRequestType<
    (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'insights',
    '/insights/controls-by-assessment#controlDomainId&assessmentId',
    keyArgs,
  ] as const
}

export function getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryKey>
  >({
    queryKey: getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights['controls-by-assessment#controlDomainId&assessmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsightsControlsByAssessmentControlDomainIdAssessmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryKey>
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
      ...getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAssessmentFrameworkShareRequestsRequestTypeQueryKey(
  args: InferRequestType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'assessmentFrameworkShareRequests#requestType',
    '/assessmentFrameworkShareRequests#requestType',
    keyArgs,
  ] as const
}

export function getAssessmentFrameworkShareRequestsRequestTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentFrameworkShareRequestsRequestTypeQueryKey>
  >({
    queryKey: getAssessmentFrameworkShareRequestsRequestTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['assessmentFrameworkShareRequests#requestType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssessmentFrameworkShareRequestsRequestType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['assessmentFrameworkShareRequests#requestType']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssessmentFrameworkShareRequestsRequestTypeQueryKey>
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
      ...getAssessmentFrameworkShareRequestsRequestTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAssessmentFrameworksFrameworkTypeQueryKey(
  args: InferRequestType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'assessmentFrameworks#frameworkType',
    '/assessmentFrameworks#frameworkType',
    keyArgs,
  ] as const
}

export function getAssessmentFrameworksFrameworkTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentFrameworksFrameworkTypeQueryKey>
  >({
    queryKey: getAssessmentFrameworksFrameworkTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['assessmentFrameworks#frameworkType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssessmentFrameworksFrameworkType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssessmentFrameworksFrameworkTypeQueryKey>
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
      ...getAssessmentFrameworksFrameworkTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAssessmentReportsQueryKey(
  args: InferRequestType<typeof client.assessmentReports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['assessmentReports', '/assessmentReports', keyArgs] as const
}

export function getAssessmentReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.assessmentReports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentReportsQueryKey>
  >({
    queryKey: getAssessmentReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assessmentReports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssessmentReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.assessmentReports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssessmentReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAssessmentReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getInsightsControlDomainsQueryKey(
  args: InferRequestType<(typeof client.insights)['control-domains']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/control-domains', keyArgs] as const
}

export function getInsightsControlDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)['control-domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsControlDomainsQueryKey>
  >({
    queryKey: getInsightsControlDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights['control-domains'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsightsControlDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.insights)['control-domains']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsControlDomainsQueryKey>
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
      ...getInsightsControlDomainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInsightsControlDomainsByAssessmentAssessmentIdQueryKey(
  args: InferRequestType<
    (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/control-domains-by-assessment#assessmentId', keyArgs] as const
}

export function getInsightsControlDomainsByAssessmentAssessmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsControlDomainsByAssessmentAssessmentIdQueryKey>
  >({
    queryKey: getInsightsControlDomainsByAssessmentAssessmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights['control-domains-by-assessment#assessmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsightsControlDomainsByAssessmentAssessmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsControlDomainsByAssessmentAssessmentIdQueryKey>
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
      ...getInsightsControlDomainsByAssessmentAssessmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getInsightsControlsControlDomainIdQueryKey(
  args: InferRequestType<(typeof client.insights)['controls#controlDomainId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/controls#controlDomainId', keyArgs] as const
}

export function getInsightsControlsControlDomainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)['controls#controlDomainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsControlsControlDomainIdQueryKey>
  >({
    queryKey: getInsightsControlsControlDomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights['controls#controlDomainId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInsightsControlsControlDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.insights)['controls#controlDomainId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsControlsControlDomainIdQueryKey>
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
      ...getInsightsControlsControlDomainIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getControlsControlTypeQueryKey(
  args: InferRequestType<(typeof client)['controls#controlType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['controls#controlType', '/controls#controlType', keyArgs] as const
}

export function getControlsControlTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['controls#controlType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getControlsControlTypeQueryKey>
  >({
    queryKey: getControlsControlTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['controls#controlType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createControlsControlType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['controls#controlType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getControlsControlTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getControlsControlTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDataSourceKeywordsSourceQueryKey(
  args: InferRequestType<(typeof client)['dataSourceKeywords#source']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dataSourceKeywords#source', '/dataSourceKeywords#source', keyArgs] as const
}

export function getDataSourceKeywordsSourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['dataSourceKeywords#source']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourceKeywordsSourceQueryKey>
  >({
    queryKey: getDataSourceKeywordsSourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['dataSourceKeywords#source'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDataSourceKeywordsSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['dataSourceKeywords#source']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDataSourceKeywordsSourceQueryKey>
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
      ...getDataSourceKeywordsSourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNotificationsQueryKey(args: InferRequestType<typeof client.notifications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications', keyArgs] as const
}

export function getNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >({
    queryKey: getNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.notifications.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
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
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
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
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
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

export function getPostAccountRegisterAccountMutationKey() {
  return ['account', '/account/registerAccount', 'POST'] as const
}

export function getPostAccountRegisterAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.registerAccount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.registerAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountRegisterAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.registerAccount.$post>) {
      return parseResponse(client.account.registerAccount.$post(args, options))
    },
  })
}

export function createPostAccountRegisterAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.registerAccount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.registerAccount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountRegisterAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountRegisterOrganizationAdminAccountMutationKey() {
  return ['account', '/account/registerOrganizationAdminAccount', 'POST'] as const
}

export function getPostAccountRegisterOrganizationAdminAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.registerOrganizationAdminAccount.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.account.registerOrganizationAdminAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountRegisterOrganizationAdminAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.account.registerOrganizationAdminAccount.$post>,
    ) {
      return parseResponse(client.account.registerOrganizationAdminAccount.$post(args, options))
    },
  })
}

export function createPostAccountRegisterOrganizationAdminAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.account.registerOrganizationAdminAccount.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.account.registerOrganizationAdminAccount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountRegisterOrganizationAdminAccountMutationOptions<
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

export function getPostAssessmentFrameworksFrameworkIdShareRequestsMutationKey() {
  return [
    'assessmentFrameworks',
    '/assessmentFrameworks/:frameworkId/shareRequests',
    'POST',
  ] as const
}

export function getPostAssessmentFrameworksFrameworkIdShareRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessmentFrameworks)[':frameworkId']['shareRequests']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.assessmentFrameworks)[':frameworkId']['shareRequests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAssessmentFrameworksFrameworkIdShareRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessmentFrameworks)[':frameworkId']['shareRequests']['$post']
      >,
    ) {
      return parseResponse(
        client.assessmentFrameworks[':frameworkId'].shareRequests.$post(args, options),
      )
    },
  })
}

export function createPostAssessmentFrameworksFrameworkIdShareRequests<
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
                  (typeof client.assessmentFrameworks)[':frameworkId']['shareRequests']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.assessmentFrameworks)[':frameworkId']['shareRequests']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssessmentFrameworksFrameworkIdShareRequestsMutationOptions<
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

export function getPutAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdMutationKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/controls/:controlId',
    'PUT',
  ] as const
}

export function getPutAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['$put']
      >,
    ) {
      return parseResponse(
        client.assessments[':assessmentId'].controlSets[':controlSetId'].controls[
          ':controlId'
        ].$put(args, options),
      )
    },
  })
}

export function createPutAssessmentsAssessmentIdControlSetsControlSetIdControlsControlId<
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
                  (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['$put']
        >,
        TOnMutateResult
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
      getPutAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdMutationOptions<
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

export function getPutAssessmentsAssessmentIdControlSetsControlSetIdStatusMutationKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/status',
    'PUT',
  ] as const
}

export function getPutAssessmentsAssessmentIdControlSetsControlSetIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentsAssessmentIdControlSetsControlSetIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.assessments[':assessmentId'].controlSets[':controlSetId'].status.$put(args, options),
      )
    },
  })
}

export function createPutAssessmentsAssessmentIdControlSetsControlSetIdStatus<
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
                  (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['status']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['status']['$put']
        >,
        TOnMutateResult
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
      getPutAssessmentsAssessmentIdControlSetsControlSetIdStatusMutationOptions<
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

export function getPutAssessmentFrameworkShareRequestsRequestIdMutationKey() {
  return [
    'assessmentFrameworkShareRequests',
    '/assessmentFrameworkShareRequests/:requestId',
    'PUT',
  ] as const
}

export function getPutAssessmentFrameworkShareRequestsRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.assessmentFrameworkShareRequests)[':requestId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assessmentFrameworkShareRequests)[':requestId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentFrameworkShareRequestsRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assessmentFrameworkShareRequests)[':requestId']['$put']
      >,
    ) {
      return parseResponse(
        client.assessmentFrameworkShareRequests[':requestId'].$put(args, options),
      )
    },
  })
}

export function createPutAssessmentFrameworkShareRequestsRequestId<
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
                ReturnType<(typeof client.assessmentFrameworkShareRequests)[':requestId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.assessmentFrameworkShareRequests)[':requestId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAssessmentFrameworkShareRequestsRequestIdMutationOptions<
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

export function getPutAssessmentsAssessmentIdStatusMutationKey() {
  return ['assessments', '/assessments/:assessmentId/status', 'PUT'] as const
}

export function getPutAssessmentsAssessmentIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assessments)[':assessmentId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssessmentsAssessmentIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assessments)[':assessmentId']['status']['$put']>,
    ) {
      return parseResponse(client.assessments[':assessmentId'].status.$put(args, options))
    },
  })
}

export function createPutAssessmentsAssessmentIdStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['status']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.assessments)[':assessmentId']['status']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAssessmentsAssessmentIdStatusMutationOptions<
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

export function getPutSettingsMutationKey() {
  return ['settings', '/settings', 'PUT'] as const
}

export function getPutSettingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>>,
    TError,
    InferRequestType<typeof client.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.$put>) {
      return parseResponse(client.settings.$put(args, options))
    },
  })
}

export function createPutSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>>,
        TError,
        InferRequestType<typeof client.settings.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAssessmentReportsIntegrityMutationKey() {
  return ['assessmentReports', '/assessmentReports/integrity', 'POST'] as const
}

export function getPostAssessmentReportsIntegrityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.integrity.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.assessmentReports.integrity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssessmentReportsIntegrityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assessmentReports.integrity.$post>) {
      return parseResponse(client.assessmentReports.integrity.$post(args, options))
    },
  })
}

export function createPostAssessmentReportsIntegrity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.assessmentReports.integrity.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.assessmentReports.integrity.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssessmentReportsIntegrityMutationOptions<
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
