import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPutAssessmentsAssessmentIdAssociateToAssessmentReportKey() {
  return ['assessments', '/assessments/:assessmentId/associateToAssessmentReport', 'PUT'] as const
}

export function usePutAssessmentsAssessmentIdAssociateToAssessmentReport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['associateToAssessmentReport']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssessmentsAssessmentIdAssociateToAssessmentReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessments)[':assessmentId']['associateToAssessmentReport']['$put']
          >
        },
      ) =>
        parseResponse(
          client.assessments[':assessmentId'].associateToAssessmentReport.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAssessmentsAssessmentIdBatchAssociateToAssessmentReportKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/batchAssociateToAssessmentReport',
    'PUT',
  ] as const
}

export function usePutAssessmentsAssessmentIdBatchAssociateToAssessmentReport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['batchAssociateToAssessmentReport']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssessmentsAssessmentIdBatchAssociateToAssessmentReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessments)[':assessmentId']['batchAssociateToAssessmentReport']['$put']
          >
        },
      ) =>
        parseResponse(
          client.assessments[':assessmentId'].batchAssociateToAssessmentReport.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAssessmentsAssessmentIdDelegationsKey() {
  return ['assessments', '/assessments/:assessmentId/delegations', 'PUT'] as const
}

export function usePutAssessmentsAssessmentIdDelegations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssessmentsAssessmentIdDelegationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>
        },
      ) => parseResponse(client.assessments[':assessmentId'].delegations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssessmentsAssessmentIdDelegationsKey() {
  return ['assessments', '/assessments/:assessmentId/delegations', 'POST'] as const
}

export function usePostAssessmentsAssessmentIdDelegations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['delegations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssessmentsAssessmentIdDelegationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessments)[':assessmentId']['delegations']['$post']
          >
        },
      ) => parseResponse(client.assessments[':assessmentId'].delegations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/batchDisassociateFromAssessmentReport',
    'PUT',
  ] as const
}

export function usePutAssessmentsAssessmentIdBatchDisassociateFromAssessmentReport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['batchDisassociateFromAssessmentReport']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessments)[':assessmentId']['batchDisassociateFromAssessmentReport']['$put']
          >
        },
      ) =>
        parseResponse(
          client.assessments[':assessmentId'].batchDisassociateFromAssessmentReport.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/controls/:controlId/evidence',
    'POST',
  ] as const
}

export function usePostAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidence<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['evidence']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['evidence']['$post']
          >
        },
      ) =>
        parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].controls[
            ':controlId'
          ].evidence.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAssessmentsKey(args: InferRequestType<typeof client.assessments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['assessments', '/assessments', keyArgs] as const
}

export function useGetAssessments<TError = unknown>(
  args: InferRequestType<typeof client.assessments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssessmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assessments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessments<TError = unknown>(
  args: InferRequestType<typeof client.assessments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssessmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assessments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAssessmentsKey() {
  return ['assessments', '/assessments', 'POST'] as const
}

export function usePostAssessments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.assessments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssessmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assessments.$post> }) =>
        parseResponse(client.assessments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssessmentFrameworksKey() {
  return ['assessmentFrameworks', '/assessmentFrameworks', 'POST'] as const
}

export function usePostAssessmentFrameworks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assessmentFrameworks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assessmentFrameworks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssessmentFrameworksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assessmentFrameworks.$post> },
      ) => parseResponse(client.assessmentFrameworks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssessmentsAssessmentIdReportsKey() {
  return ['assessments', '/assessments/:assessmentId/reports', 'POST'] as const
}

export function usePostAssessmentsAssessmentIdReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['reports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assessments)[':assessmentId']['reports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssessmentsAssessmentIdReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.assessments)[':assessmentId']['reports']['$post']>
        },
      ) => parseResponse(client.assessments[':assessmentId'].reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostControlsKey() {
  return ['controls', '/controls', 'POST'] as const
}

export function usePostControls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.controls.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.controls.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostControlsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.controls.$post> }) =>
        parseResponse(client.controls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssessmentsAssessmentIdKey(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assessments', '/assessments/:assessmentId', keyArgs] as const
}

export function useGetAssessmentsAssessmentId<TError = unknown>(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
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
        ? getGetAssessmentsAssessmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assessments[':assessmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentsAssessmentId<TError = unknown>(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
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
        ? getGetAssessmentsAssessmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assessments[':assessmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAssessmentsAssessmentIdKey() {
  return ['assessments', '/assessments/:assessmentId', 'PUT'] as const
}

export function usePutAssessmentsAssessmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assessments)[':assessmentId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssessmentsAssessmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assessments)[':assessmentId']['$put']> },
      ) => parseResponse(client.assessments[':assessmentId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAssessmentsAssessmentIdKey() {
  return ['assessments', '/assessments/:assessmentId', 'DELETE'] as const
}

export function useDeleteAssessmentsAssessmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assessments)[':assessmentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssessmentsAssessmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assessments)[':assessmentId']['$delete']> },
      ) => parseResponse(client.assessments[':assessmentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssessmentFrameworksFrameworkIdKey(
  args: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assessmentFrameworks', '/assessmentFrameworks/:frameworkId', keyArgs] as const
}

export function useGetAssessmentFrameworksFrameworkId<TError = unknown>(
  args: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
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
        ? getGetAssessmentFrameworksFrameworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.assessmentFrameworks[':frameworkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentFrameworksFrameworkId<TError = unknown>(
  args: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
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
        ? getGetAssessmentFrameworksFrameworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.assessmentFrameworks[':frameworkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAssessmentFrameworksFrameworkIdKey() {
  return ['assessmentFrameworks', '/assessmentFrameworks/:frameworkId', 'PUT'] as const
}

export function usePutAssessmentFrameworksFrameworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssessmentFrameworksFrameworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']> },
      ) => parseResponse(client.assessmentFrameworks[':frameworkId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAssessmentFrameworksFrameworkIdKey() {
  return ['assessmentFrameworks', '/assessmentFrameworks/:frameworkId', 'DELETE'] as const
}

export function useDeleteAssessmentFrameworksFrameworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssessmentFrameworksFrameworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>
        },
      ) => parseResponse(client.assessmentFrameworks[':frameworkId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAssessmentFrameworkShareRequestsRequestIdRequestTypeKey() {
  return [
    'assessmentFrameworkShareRequests',
    '/assessmentFrameworkShareRequests/:requestId#requestType',
    'DELETE',
  ] as const
}

export function useDeleteAssessmentFrameworkShareRequestsRequestIdRequestType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.assessmentFrameworkShareRequests)[':requestId#requestType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssessmentFrameworkShareRequestsRequestIdRequestTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessmentFrameworkShareRequests)[':requestId#requestType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.assessmentFrameworkShareRequests[':requestId#requestType'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAssessmentsAssessmentIdReportsAssessmentReportIdKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/reports/:assessmentReportId',
    'DELETE',
  ] as const
}

export function useDeleteAssessmentsAssessmentIdReportsAssessmentReportId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssessmentsAssessmentIdReportsAssessmentReportIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.assessments[':assessmentId'].reports[':assessmentReportId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetControlsControlIdKey(
  args: InferRequestType<(typeof client.controls)[':controlId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['controls', '/controls/:controlId', keyArgs] as const
}

export function useGetControlsControlId<TError = unknown>(
  args: InferRequestType<(typeof client.controls)[':controlId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>>
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
        ? getGetControlsControlIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.controls[':controlId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetControlsControlId<TError = unknown>(
  args: InferRequestType<(typeof client.controls)[':controlId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>>
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
        ? getGetControlsControlIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.controls[':controlId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutControlsControlIdKey() {
  return ['controls', '/controls/:controlId', 'PUT'] as const
}

export function usePutControlsControlId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.controls)[':controlId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutControlsControlIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.controls)[':controlId']['$put']> },
      ) => parseResponse(client.controls[':controlId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteControlsControlIdKey() {
  return ['controls', '/controls/:controlId', 'DELETE'] as const
}

export function useDeleteControlsControlId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.controls)[':controlId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.controls)[':controlId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteControlsControlIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.controls)[':controlId']['$delete']> },
      ) => parseResponse(client.controls[':controlId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountDeregisterAccountKey() {
  return ['account', '/account/deregisterAccount', 'POST'] as const
}

export function usePostAccountDeregisterAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.deregisterAccount.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.deregisterAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountDeregisterAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.deregisterAccount.$post> },
      ) => parseResponse(client.account.deregisterAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountDeregisterOrganizationAdminAccountKey() {
  return ['account', '/account/deregisterOrganizationAdminAccount', 'POST'] as const
}

export function usePostAccountDeregisterOrganizationAdminAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.deregisterOrganizationAdminAccount.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.deregisterOrganizationAdminAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountDeregisterOrganizationAdminAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.account.deregisterOrganizationAdminAccount.$post>
        },
      ) =>
        parseResponse(client.account.deregisterOrganizationAdminAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAssessmentsAssessmentIdDisassociateFromAssessmentReportKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/disassociateFromAssessmentReport',
    'PUT',
  ] as const
}

export function usePutAssessmentsAssessmentIdDisassociateFromAssessmentReport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['disassociateFromAssessmentReport']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssessmentsAssessmentIdDisassociateFromAssessmentReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessments)[':assessmentId']['disassociateFromAssessmentReport']['$put']
          >
        },
      ) =>
        parseResponse(
          client.assessments[':assessmentId'].disassociateFromAssessmentReport.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountStatusKey(args: InferRequestType<typeof client.account.status.$get>) {
  const { header: _, ...keyArgs } = args
  return ['account', '/account/status', keyArgs] as const
}

export function useGetAccountStatus<TError = unknown>(
  args: InferRequestType<typeof client.account.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountStatus<TError = unknown>(
  args: InferRequestType<typeof client.account.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssessmentsAssessmentIdReportsAssessmentReportIdUrlKey(
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

export function useGetAssessmentsAssessmentIdReportsAssessmentReportIdUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssessmentsAssessmentIdReportsAssessmentReportIdUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId'].reports[':assessmentReportId'].url.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentsAssessmentIdReportsAssessmentReportIdUrl<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssessmentsAssessmentIdReportsAssessmentReportIdUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId'].reports[':assessmentReportId'].url.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssessmentsAssessmentIdChangelogsKey(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assessments', '/assessments/:assessmentId/changelogs', keyArgs] as const
}

export function useGetAssessmentsAssessmentIdChangelogs<TError = unknown>(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>>
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
        ? getGetAssessmentsAssessmentIdChangelogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.assessments[':assessmentId'].changelogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentsAssessmentIdChangelogs<TError = unknown>(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>>
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
        ? getGetAssessmentsAssessmentIdChangelogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.assessments[':assessmentId'].changelogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDelegationsKey(args: InferRequestType<typeof client.delegations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['delegations', '/delegations', keyArgs] as const
}

export function useGetDelegations<TError = unknown>(
  args: InferRequestType<typeof client.delegations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDelegationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delegations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDelegations<TError = unknown>(
  args: InferRequestType<typeof client.delegations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDelegationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delegations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delegations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdKey(
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

export function useGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
            ':evidenceFolderId'
          ].evidence[':evidenceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
            ':evidenceFolderId'
          ].evidence[':evidenceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceKey(
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

export function useGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidence<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
            ':evidenceFolderId'
          ].evidence.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidence<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
            ':evidenceFolderId'
          ].evidence.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdKey(
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

export function useGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
            ':evidenceFolderId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
            ':evidenceFolderId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssessmentsAssessmentIdEvidenceFoldersKey(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assessments', '/assessments/:assessmentId/evidenceFolders', keyArgs] as const
}

export function useGetAssessmentsAssessmentIdEvidenceFolders<TError = unknown>(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>
            >
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
        ? getGetAssessmentsAssessmentIdEvidenceFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId'].evidenceFolders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentsAssessmentIdEvidenceFolders<TError = unknown>(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>
            >
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
        ? getGetAssessmentsAssessmentIdEvidenceFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId'].evidenceFolders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdKey(
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

export function useGetAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId']['evidenceFolders-by-assessment-control'][
            ':controlSetId'
          ][':controlId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assessments[':assessmentId']['evidenceFolders-by-assessment-control'][
            ':controlSetId'
          ][':controlId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsKey(args: InferRequestType<typeof client.insights.$get>) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights', keyArgs] as const
}

export function useGetInsights<TError = unknown>(
  args: InferRequestType<typeof client.insights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInsightsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.insights.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInsights<TError = unknown>(
  args: InferRequestType<typeof client.insights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInsightsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.insights.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetInsightsAssessmentsAssessmentIdKey(
  args: InferRequestType<(typeof client.insights.assessments)[':assessmentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/assessments/:assessmentId', keyArgs] as const
}

export function useGetInsightsAssessmentsAssessmentId<TError = unknown>(
  args: InferRequestType<(typeof client.insights.assessments)[':assessmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
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
        ? getGetInsightsAssessmentsAssessmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights.assessments[':assessmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsAssessmentsAssessmentId<TError = unknown>(
  args: InferRequestType<(typeof client.insights.assessments)[':assessmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
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
        ? getGetInsightsAssessmentsAssessmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights.assessments)[':assessmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights.assessments[':assessmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountOrganizationAdminAccountKey(
  args: InferRequestType<typeof client.account.organizationAdminAccount.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['account', '/account/organizationAdminAccount', keyArgs] as const
}

export function useGetAccountOrganizationAdminAccount<TError = unknown>(
  args: InferRequestType<typeof client.account.organizationAdminAccount.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>
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
        ? getGetAccountOrganizationAdminAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.organizationAdminAccount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountOrganizationAdminAccount<TError = unknown>(
  args: InferRequestType<typeof client.account.organizationAdminAccount.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>
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
        ? getGetAccountOrganizationAdminAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.organizationAdminAccount.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.organizationAdminAccount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServicesKey(args: InferRequestType<typeof client.services.$get>) {
  const { header: _, ...keyArgs } = args
  return ['services', '/services', keyArgs] as const
}

export function useGetServices<TError = unknown>(
  args: InferRequestType<typeof client.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.services.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetServices<TError = unknown>(
  args: InferRequestType<typeof client.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.services.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSettingsAttributeKey(
  args: InferRequestType<(typeof client.settings)[':attribute']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['settings', '/settings/:attribute', keyArgs] as const
}

export function useGetSettingsAttribute<TError = unknown>(
  args: InferRequestType<(typeof client.settings)[':attribute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>>
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
        ? getGetSettingsAttributeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings[':attribute'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsAttribute<TError = unknown>(
  args: InferRequestType<(typeof client.settings)[':attribute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>>
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
        ? getGetSettingsAttributeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':attribute']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings[':attribute'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsControlsByAssessmentControlDomainIdAssessmentIdKey(
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

export function useGetInsightsControlsByAssessmentControlDomainIdAssessmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsControlsByAssessmentControlDomainIdAssessmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.insights['controls-by-assessment#controlDomainId&assessmentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsControlsByAssessmentControlDomainIdAssessmentId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsControlsByAssessmentControlDomainIdAssessmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.insights['controls-by-assessment#controlDomainId&assessmentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssessmentFrameworkShareRequestsRequestTypeKey(
  args: InferRequestType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'assessmentFrameworkShareRequests#requestType',
    '/assessmentFrameworkShareRequests#requestType',
    keyArgs,
  ] as const
}

export function useGetAssessmentFrameworkShareRequestsRequestType<TError = unknown>(
  args: InferRequestType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>
            >
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
        ? getGetAssessmentFrameworkShareRequestsRequestTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['assessmentFrameworkShareRequests#requestType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentFrameworkShareRequestsRequestType<TError = unknown>(
  args: InferRequestType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>
            >
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
        ? getGetAssessmentFrameworkShareRequestsRequestTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['assessmentFrameworkShareRequests#requestType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssessmentFrameworksFrameworkTypeKey(
  args: InferRequestType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'assessmentFrameworks#frameworkType',
    '/assessmentFrameworks#frameworkType',
    keyArgs,
  ] as const
}

export function useGetAssessmentFrameworksFrameworkType<TError = unknown>(
  args: InferRequestType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
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
        ? getGetAssessmentFrameworksFrameworkTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['assessmentFrameworks#frameworkType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentFrameworksFrameworkType<TError = unknown>(
  args: InferRequestType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
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
        ? getGetAssessmentFrameworksFrameworkTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['assessmentFrameworks#frameworkType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssessmentReportsKey(
  args: InferRequestType<typeof client.assessmentReports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['assessmentReports', '/assessmentReports', keyArgs] as const
}

export function useGetAssessmentReports<TError = unknown>(
  args: InferRequestType<typeof client.assessmentReports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>>
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
        ? getGetAssessmentReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assessmentReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssessmentReports<TError = unknown>(
  args: InferRequestType<typeof client.assessmentReports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>>
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
        ? getGetAssessmentReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assessmentReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsControlDomainsKey(
  args: InferRequestType<(typeof client.insights)['control-domains']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/control-domains', keyArgs] as const
}

export function useGetInsightsControlDomains<TError = unknown>(
  args: InferRequestType<(typeof client.insights)['control-domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>
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
        ? getGetInsightsControlDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.insights['control-domains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsControlDomains<TError = unknown>(
  args: InferRequestType<(typeof client.insights)['control-domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>
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
        ? getGetInsightsControlDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)['control-domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.insights['control-domains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsControlDomainsByAssessmentAssessmentIdKey(
  args: InferRequestType<
    (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/control-domains-by-assessment#assessmentId', keyArgs] as const
}

export function useGetInsightsControlDomainsByAssessmentAssessmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsControlDomainsByAssessmentAssessmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.insights['control-domains-by-assessment#assessmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsControlDomainsByAssessmentAssessmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetInsightsControlDomainsByAssessmentAssessmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.insights['control-domains-by-assessment#assessmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInsightsControlsControlDomainIdKey(
  args: InferRequestType<(typeof client.insights)['controls#controlDomainId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/controls#controlDomainId', keyArgs] as const
}

export function useGetInsightsControlsControlDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.insights)['controls#controlDomainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
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
        ? getGetInsightsControlsControlDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights['controls#controlDomainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsControlsControlDomainId<TError = unknown>(
  args: InferRequestType<(typeof client.insights)['controls#controlDomainId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
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
        ? getGetInsightsControlsControlDomainIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.insights)['controls#controlDomainId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.insights['controls#controlDomainId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetControlsControlTypeKey(
  args: InferRequestType<(typeof client)['controls#controlType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['controls#controlType', '/controls#controlType', keyArgs] as const
}

export function useGetControlsControlType<TError = unknown>(
  args: InferRequestType<(typeof client)['controls#controlType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>>
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
        ? getGetControlsControlTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['controls#controlType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetControlsControlType<TError = unknown>(
  args: InferRequestType<(typeof client)['controls#controlType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>>
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
        ? getGetControlsControlTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['controls#controlType']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['controls#controlType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDataSourceKeywordsSourceKey(
  args: InferRequestType<(typeof client)['dataSourceKeywords#source']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dataSourceKeywords#source', '/dataSourceKeywords#source', keyArgs] as const
}

export function useGetDataSourceKeywordsSource<TError = unknown>(
  args: InferRequestType<(typeof client)['dataSourceKeywords#source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
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
        ? getGetDataSourceKeywordsSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dataSourceKeywords#source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDataSourceKeywordsSource<TError = unknown>(
  args: InferRequestType<(typeof client)['dataSourceKeywords#source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
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
        ? getGetDataSourceKeywordsSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['dataSourceKeywords#source']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dataSourceKeywords#source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsKey(args: InferRequestType<typeof client.notifications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications', keyArgs] as const
}

export function useGetNotifications<TError = unknown>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotifications<TError = unknown>(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountRegisterAccountKey() {
  return ['account', '/account/registerAccount', 'POST'] as const
}

export function usePostAccountRegisterAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.registerAccount.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.registerAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountRegisterAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.registerAccount.$post> },
      ) => parseResponse(client.account.registerAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountRegisterOrganizationAdminAccountKey() {
  return ['account', '/account/registerOrganizationAdminAccount', 'POST'] as const
}

export function usePostAccountRegisterOrganizationAdminAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.account.registerOrganizationAdminAccount.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.registerOrganizationAdminAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountRegisterOrganizationAdminAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.account.registerOrganizationAdminAccount.$post> },
      ) => parseResponse(client.account.registerOrganizationAdminAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssessmentFrameworksFrameworkIdShareRequestsKey() {
  return [
    'assessmentFrameworks',
    '/assessmentFrameworks/:frameworkId/shareRequests',
    'POST',
  ] as const
}

export function usePostAssessmentFrameworksFrameworkIdShareRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['shareRequests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssessmentFrameworksFrameworkIdShareRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessmentFrameworks)[':frameworkId']['shareRequests']['$post']
          >
        },
      ) =>
        parseResponse(
          client.assessmentFrameworks[':frameworkId'].shareRequests.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/controls/:controlId',
    'PUT',
  ] as const
}

export function usePutAssessmentsAssessmentIdControlSetsControlSetIdControlsControlId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].controls[
            ':controlId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAssessmentsAssessmentIdControlSetsControlSetIdStatusKey() {
  return [
    'assessments',
    '/assessments/:assessmentId/controlSets/:controlSetId/status',
    'PUT',
  ] as const
}

export function usePutAssessmentsAssessmentIdControlSetsControlSetIdStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssessmentsAssessmentIdControlSetsControlSetIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.assessments[':assessmentId'].controlSets[':controlSetId'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAssessmentFrameworkShareRequestsRequestIdKey() {
  return [
    'assessmentFrameworkShareRequests',
    '/assessmentFrameworkShareRequests/:requestId',
    'PUT',
  ] as const
}

export function usePutAssessmentFrameworkShareRequestsRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.assessmentFrameworkShareRequests)[':requestId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssessmentFrameworkShareRequestsRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.assessmentFrameworkShareRequests)[':requestId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.assessmentFrameworkShareRequests[':requestId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAssessmentsAssessmentIdStatusKey() {
  return ['assessments', '/assessments/:assessmentId/status', 'PUT'] as const
}

export function usePutAssessmentsAssessmentIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assessments)[':assessmentId']['status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assessments)[':assessmentId']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssessmentsAssessmentIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.assessments)[':assessmentId']['status']['$put']>
        },
      ) => parseResponse(client.assessments[':assessmentId'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSettingsKey() {
  return ['settings', '/settings', 'PUT'] as const
}

export function usePutSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.settings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.$put> }) =>
        parseResponse(client.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssessmentReportsIntegrityKey() {
  return ['assessmentReports', '/assessmentReports/integrity', 'POST'] as const
}

export function usePostAssessmentReportsIntegrity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.assessmentReports.integrity.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.assessmentReports.integrity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssessmentReportsIntegrityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.assessmentReports.integrity.$post> },
      ) => parseResponse(client.assessmentReports.integrity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
