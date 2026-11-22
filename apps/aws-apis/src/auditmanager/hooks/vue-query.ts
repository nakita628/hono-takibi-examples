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

export function usePutAssessmentsAssessmentIdAssociateToAssessmentReport<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAssessmentsAssessmentIdAssociateToAssessmentReportMutationOptions<
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

export function usePutAssessmentsAssessmentIdBatchAssociateToAssessmentReport<
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
    getPutAssessmentsAssessmentIdBatchAssociateToAssessmentReportMutationOptions<
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

export function usePutAssessmentsAssessmentIdDelegations<
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
                  ReturnType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>,
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
  const mutationDefaults = getPutAssessmentsAssessmentIdDelegationsMutationOptions<
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

export function usePostAssessmentsAssessmentIdDelegations<
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
                  ReturnType<(typeof client.assessments)[':assessmentId']['delegations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$post']>,
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
  const mutationDefaults = getPostAssessmentsAssessmentIdDelegationsMutationOptions<
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

export function usePutAssessmentsAssessmentIdBatchDisassociateFromAssessmentReport<
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
    getPutAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportMutationOptions<
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

export function usePostAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidence<
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
    getPostAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceMutationOptions<
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

export function getAssessmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assessments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assessments', '/assessments', keyArgs] as const
}

export function getAssessmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assessments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssessmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssessments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assessments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>
          >,
          ReturnType<typeof getAssessmentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssessmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssessmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assessments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAssessments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.assessments.$post>,
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
  const mutationDefaults = getPostAssessmentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAssessmentFrameworks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assessmentFrameworks.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.assessmentFrameworks.$post>,
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
  const mutationDefaults = getPostAssessmentFrameworksMutationOptions<TError, TOnMutateResult>(
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

export function usePostAssessmentsAssessmentIdReports<
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
                  ReturnType<(typeof client.assessments)[':assessmentId']['reports']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assessments)[':assessmentId']['reports']['$post']>,
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
  const mutationDefaults = getPostAssessmentsAssessmentIdReportsMutationOptions<
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

export function usePostControls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.controls.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.controls.$post>,
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
  const mutationDefaults = getPostControlsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssessmentsAssessmentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assessments)[':assessmentId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assessments', '/assessments/:assessmentId', keyArgs] as const
}

export function getAssessmentsAssessmentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assessments)[':assessmentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssessmentsAssessmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessments[':assessmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssessmentsAssessmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assessments)[':assessmentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssessmentsAssessmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentsAssessmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssessmentsAssessmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assessments[':assessmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAssessmentsAssessmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAssessmentsAssessmentIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteAssessmentsAssessmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAssessmentsAssessmentIdMutationOptions<TError, TOnMutateResult>(
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

export function getAssessmentFrameworksFrameworkIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assessmentFrameworks', '/assessmentFrameworks/:frameworkId', keyArgs] as const
}

export function getAssessmentFrameworksFrameworkIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssessmentFrameworksFrameworkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessmentFrameworks[':frameworkId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssessmentFrameworksFrameworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssessmentFrameworksFrameworkIdQueryKey>
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
          Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentFrameworksFrameworkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssessmentFrameworksFrameworkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assessmentFrameworks[':frameworkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAssessmentFrameworksFrameworkId<
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
                Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']>,
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
  const mutationDefaults = getPutAssessmentFrameworksFrameworkIdMutationOptions<
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

export function useDeleteAssessmentFrameworksFrameworkId<
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
                Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>,
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
  const mutationDefaults = getDeleteAssessmentFrameworksFrameworkIdMutationOptions<
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

export function useDeleteAssessmentFrameworkShareRequestsRequestIdRequestType<
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
    getDeleteAssessmentFrameworkShareRequestsRequestIdRequestTypeMutationOptions<
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

export function useDeleteAssessmentsAssessmentIdReportsAssessmentReportId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAssessmentsAssessmentIdReportsAssessmentReportIdMutationOptions<
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

export function getControlsControlIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.controls)[':controlId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['controls', '/controls/:controlId', keyArgs] as const
}

export function getControlsControlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.controls)[':controlId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getControlsControlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.controls[':controlId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useControlsControlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.controls)[':controlId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getControlsControlIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getControlsControlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getControlsControlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.controls[':controlId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutControlsControlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutControlsControlIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteControlsControlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteControlsControlIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostAccountDeregisterAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.deregisterAccount.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.account.deregisterAccount.$post>,
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
  const mutationDefaults = getPostAccountDeregisterAccountMutationOptions<TError, TOnMutateResult>(
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

export function usePostAccountDeregisterOrganizationAdminAccount<
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
                Awaited<ReturnType<typeof client.account.deregisterOrganizationAdminAccount.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.account.deregisterOrganizationAdminAccount.$post>,
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
  const mutationDefaults = getPostAccountDeregisterOrganizationAdminAccountMutationOptions<
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

export function usePutAssessmentsAssessmentIdDisassociateFromAssessmentReport<
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
    getPutAssessmentsAssessmentIdDisassociateFromAssessmentReportMutationOptions<
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

export function getAccountStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.status.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['account', '/account/status', keyArgs] as const
}

export function getAccountStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
          >,
          ReturnType<typeof getAccountStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'assessments',
    '/assessments/:assessmentId/reports/:assessmentReportId/url',
    keyArgs,
  ] as const
}

export function getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessments[':assessmentId'].reports[':assessmentReportId'].url.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssessmentsAssessmentIdReportsAssessmentReportIdUrl<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
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
                    (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
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
                    (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryKey>
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
              (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAssessmentsAssessmentIdReportsAssessmentReportIdUrlQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.assessments[':assessmentId'].reports[':assessmentReportId'].url.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAssessmentsAssessmentIdChangelogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assessments', '/assessments/:assessmentId/changelogs', keyArgs] as const
}

export function getAssessmentsAssessmentIdChangelogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssessmentsAssessmentIdChangelogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessments[':assessmentId'].changelogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssessmentsAssessmentIdChangelogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAssessmentsAssessmentIdChangelogsQueryKey>
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
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentsAssessmentIdChangelogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssessmentsAssessmentIdChangelogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assessments[':assessmentId'].changelogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDelegationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.delegations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['delegations', '/delegations', keyArgs] as const
}

export function getDelegationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.delegations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDelegationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.delegations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDelegations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.delegations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>
          >,
          ReturnType<typeof getDelegationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDelegationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDelegationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.delegations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/evidenceFolders/:evidenceFolderId/evidence/:evidenceId',
    keyArgs,
  ] as const
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
          ':evidenceFolderId'
        ].evidence[':evidenceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
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
                    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
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
                    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
            ':evidenceFolderId'
          ].evidence[':evidenceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/evidenceFolders/:evidenceFolderId/evidence',
    keyArgs,
  ] as const
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
          ':evidenceFolderId'
        ].evidence.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidence<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
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
                    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
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
                    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
            ':evidenceFolderId'
          ].evidence.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/evidenceFolders/:evidenceFolderId',
    keyArgs,
  ] as const
}

export function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
          ':evidenceFolderId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
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
                    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
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
                    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
            ':evidenceFolderId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getAssessmentsAssessmentIdEvidenceFoldersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assessments', '/assessments/:assessmentId/evidenceFolders', keyArgs] as const
}

export function getAssessmentsAssessmentIdEvidenceFoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssessmentsAssessmentIdEvidenceFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessments[':assessmentId'].evidenceFolders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssessmentsAssessmentIdEvidenceFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>
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
                    (typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']
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
                    (typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAssessmentsAssessmentIdEvidenceFoldersQueryKey>
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
            ReturnType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentsAssessmentIdEvidenceFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssessmentsAssessmentIdEvidenceFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assessments[':assessmentId'].evidenceFolders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'assessments',
    '/assessments/:assessmentId/evidenceFolders-by-assessment-control/:controlSetId/:controlId',
    keyArgs,
  ] as const
}

export function getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessments[':assessmentId']['evidenceFolders-by-assessment-control'][
          ':controlSetId'
        ][':controlId'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
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
                    (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
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
                    (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.assessments[':assessmentId']['evidenceFolders-by-assessment-control'][
            ':controlSetId'
          ][':controlId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.insights.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['insights', '/insights', keyArgs] as const
}

export function getInsightsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.insights.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInsights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.insights.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>
          >,
          ReturnType<typeof getInsightsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInsightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsAssessmentsAssessmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights.assessments)[':assessmentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['insights', '/insights/assessments/:assessmentId', keyArgs] as const
}

export function getInsightsAssessmentsAssessmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights.assessments)[':assessmentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsAssessmentsAssessmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights.assessments[':assessmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsightsAssessmentsAssessmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights.assessments)[':assessmentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsightsAssessmentsAssessmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsAssessmentsAssessmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsAssessmentsAssessmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights.assessments[':assessmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountOrganizationAdminAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.organizationAdminAccount.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['account', '/account/organizationAdminAccount', keyArgs] as const
}

export function getAccountOrganizationAdminAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.organizationAdminAccount.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountOrganizationAdminAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.organizationAdminAccount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountOrganizationAdminAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.organizationAdminAccount.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountOrganizationAdminAccountQueryKey>
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
          Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountOrganizationAdminAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountOrganizationAdminAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.organizationAdminAccount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['services', '/services', keyArgs] as const
}

export function getServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          ReturnType<typeof getServicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsAttributeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.settings)[':attribute']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['settings', '/settings/:attribute', keyArgs] as const
}

export function getSettingsAttributeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.settings)[':attribute']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsAttributeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings[':attribute'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsAttribute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.settings)[':attribute']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsAttributeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsAttributeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsAttributeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings[':attribute'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'insights',
    '/insights/controls-by-assessment#controlDomainId&assessmentId',
    keyArgs,
  ] as const
}

export function getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights['controls-by-assessment#controlDomainId&assessmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsightsControlsByAssessmentControlDomainIdAssessmentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
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
                    (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
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
                    (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryKey>
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
              (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getInsightsControlsByAssessmentControlDomainIdAssessmentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.insights['controls-by-assessment#controlDomainId&assessmentId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAssessmentFrameworkShareRequestsRequestTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'assessmentFrameworkShareRequests#requestType',
    '/assessmentFrameworkShareRequests#requestType',
    keyArgs,
  ] as const
}

export function getAssessmentFrameworkShareRequestsRequestTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssessmentFrameworkShareRequestsRequestTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['assessmentFrameworkShareRequests#requestType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssessmentFrameworkShareRequestsRequestType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>
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
                    (typeof client)['assessmentFrameworkShareRequests#requestType']['$get']
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
                    (typeof client)['assessmentFrameworkShareRequests#requestType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAssessmentFrameworkShareRequestsRequestTypeQueryKey>
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
            ReturnType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentFrameworkShareRequestsRequestTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssessmentFrameworkShareRequestsRequestTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['assessmentFrameworkShareRequests#requestType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssessmentFrameworksFrameworkTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'assessmentFrameworks#frameworkType',
    '/assessmentFrameworks#frameworkType',
    keyArgs,
  ] as const
}

export function getAssessmentFrameworksFrameworkTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssessmentFrameworksFrameworkTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['assessmentFrameworks#frameworkType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssessmentFrameworksFrameworkType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssessmentFrameworksFrameworkTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentFrameworksFrameworkTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssessmentFrameworksFrameworkTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['assessmentFrameworks#frameworkType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssessmentReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assessmentReports.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assessmentReports', '/assessmentReports', keyArgs] as const
}

export function getAssessmentReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assessmentReports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssessmentReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assessmentReports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssessmentReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assessmentReports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>
            >
          >,
          ReturnType<typeof getAssessmentReportsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssessmentReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssessmentReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assessmentReports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsControlDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.insights)['control-domains']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['insights', '/insights/control-domains', keyArgs] as const
}

export function getInsightsControlDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.insights)['control-domains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsControlDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights['control-domains'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsightsControlDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.insights)['control-domains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsightsControlDomainsQueryKey>
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
          Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsControlDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsControlDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights['control-domains'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsControlDomainsByAssessmentAssessmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['insights', '/insights/control-domains-by-assessment#assessmentId', keyArgs] as const
}

export function getInsightsControlDomainsByAssessmentAssessmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsControlDomainsByAssessmentAssessmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights['control-domains-by-assessment#assessmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsightsControlDomainsByAssessmentAssessmentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']>
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
                    (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
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
                    (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getInsightsControlDomainsByAssessmentAssessmentIdQueryKey>
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
              (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsControlDomainsByAssessmentAssessmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsControlDomainsByAssessmentAssessmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights['control-domains-by-assessment#assessmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInsightsControlsControlDomainIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)['controls#controlDomainId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['insights', '/insights/controls#controlDomainId', keyArgs] as const
}

export function getInsightsControlsControlDomainIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)['controls#controlDomainId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInsightsControlsControlDomainIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.insights['controls#controlDomainId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInsightsControlsControlDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.insights)['controls#controlDomainId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInsightsControlsControlDomainIdQueryKey>
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
          Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsControlsControlDomainIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInsightsControlsControlDomainIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.insights['controls#controlDomainId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getControlsControlTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['controls#controlType']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['controls#controlType', '/controls#controlType', keyArgs] as const
}

export function getControlsControlTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['controls#controlType']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getControlsControlTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['controls#controlType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useControlsControlType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['controls#controlType']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getControlsControlTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getControlsControlTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getControlsControlTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['controls#controlType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataSourceKeywordsSourceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dataSourceKeywords#source']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dataSourceKeywords#source', '/dataSourceKeywords#source', keyArgs] as const
}

export function getDataSourceKeywordsSourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dataSourceKeywords#source']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataSourceKeywordsSourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dataSourceKeywords#source'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataSourceKeywordsSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dataSourceKeywords#source']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataSourceKeywordsSourceQueryKey>
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
          Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataSourceKeywordsSourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataSourceKeywordsSourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dataSourceKeywords#source'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notifications', '/notifications', keyArgs] as const
}

export function getNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
          >,
          ReturnType<typeof getNotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.$get(toValue(args), {
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

export function usePostAccountRegisterAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.registerAccount.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.registerAccount.$post>,
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
  const mutationDefaults = getPostAccountRegisterAccountMutationOptions<TError, TOnMutateResult>(
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

export function usePostAccountRegisterOrganizationAdminAccount<
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
                Awaited<ReturnType<typeof client.account.registerOrganizationAdminAccount.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.account.registerOrganizationAdminAccount.$post>,
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
  const mutationDefaults = getPostAccountRegisterOrganizationAdminAccountMutationOptions<
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

export function usePostAssessmentFrameworksFrameworkIdShareRequests<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssessmentFrameworksFrameworkIdShareRequestsMutationOptions<
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

export function usePutAssessmentsAssessmentIdControlSetsControlSetIdControlsControlId<
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
    getPutAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdMutationOptions<
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

export function usePutAssessmentsAssessmentIdControlSetsControlSetIdStatus<
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
    getPutAssessmentsAssessmentIdControlSetsControlSetIdStatusMutationOptions<
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

export function usePutAssessmentFrameworkShareRequestsRequestId<
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
                  ReturnType<(typeof client.assessmentFrameworkShareRequests)[':requestId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assessmentFrameworkShareRequests)[':requestId']['$put']>,
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
  const mutationDefaults = getPutAssessmentFrameworkShareRequestsRequestIdMutationOptions<
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

export function usePutAssessmentsAssessmentIdStatus<
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
                Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['status']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assessments)[':assessmentId']['status']['$put']>,
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
  const mutationDefaults = getPutAssessmentsAssessmentIdStatusMutationOptions<
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

export function usePutSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.settings.$put>,
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
  const mutationDefaults = getPutSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAssessmentReportsIntegrity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssessmentReportsIntegrityMutationOptions<
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
