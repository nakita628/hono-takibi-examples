import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonAthenaBatchGetNamedQueryKey() {
  return ['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery'] as const
}

export function getXAmzTargetAmazonAthenaBatchGetPreparedStatementKey() {
  return ['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement'] as const
}

export function getXAmzTargetAmazonAthenaBatchGetQueryExecutionKey() {
  return ['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution'] as const
}

export function getXAmzTargetAmazonAthenaCancelCapacityReservationKey() {
  return ['#X-Amz-Target=AmazonAthena.CancelCapacityReservation'] as const
}

export function getXAmzTargetAmazonAthenaCreateCapacityReservationKey() {
  return ['#X-Amz-Target=AmazonAthena.CreateCapacityReservation'] as const
}

export function getXAmzTargetAmazonAthenaCreateDataCatalogKey() {
  return ['#X-Amz-Target=AmazonAthena.CreateDataCatalog'] as const
}

export function getXAmzTargetAmazonAthenaCreateNamedQueryKey() {
  return ['#X-Amz-Target=AmazonAthena.CreateNamedQuery'] as const
}

export function getXAmzTargetAmazonAthenaCreateNotebookKey() {
  return ['#X-Amz-Target=AmazonAthena.CreateNotebook'] as const
}

export function getXAmzTargetAmazonAthenaCreatePreparedStatementKey() {
  return ['#X-Amz-Target=AmazonAthena.CreatePreparedStatement'] as const
}

export function getXAmzTargetAmazonAthenaCreatePresignedNotebookUrlKey() {
  return ['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl'] as const
}

export function getXAmzTargetAmazonAthenaCreateWorkGroupKey() {
  return ['#X-Amz-Target=AmazonAthena.CreateWorkGroup'] as const
}

export function getXAmzTargetAmazonAthenaDeleteCapacityReservationKey() {
  return ['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation'] as const
}

export function getXAmzTargetAmazonAthenaDeleteDataCatalogKey() {
  return ['#X-Amz-Target=AmazonAthena.DeleteDataCatalog'] as const
}

export function getXAmzTargetAmazonAthenaDeleteNamedQueryKey() {
  return ['#X-Amz-Target=AmazonAthena.DeleteNamedQuery'] as const
}

export function getXAmzTargetAmazonAthenaDeleteNotebookKey() {
  return ['#X-Amz-Target=AmazonAthena.DeleteNotebook'] as const
}

export function getXAmzTargetAmazonAthenaDeletePreparedStatementKey() {
  return ['#X-Amz-Target=AmazonAthena.DeletePreparedStatement'] as const
}

export function getXAmzTargetAmazonAthenaDeleteWorkGroupKey() {
  return ['#X-Amz-Target=AmazonAthena.DeleteWorkGroup'] as const
}

export function getXAmzTargetAmazonAthenaExportNotebookKey() {
  return ['#X-Amz-Target=AmazonAthena.ExportNotebook'] as const
}

export function getXAmzTargetAmazonAthenaGetCalculationExecutionKey() {
  return ['#X-Amz-Target=AmazonAthena.GetCalculationExecution'] as const
}

export function getXAmzTargetAmazonAthenaGetCalculationExecutionCodeKey() {
  return ['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode'] as const
}

export function getXAmzTargetAmazonAthenaGetCalculationExecutionStatusKey() {
  return ['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus'] as const
}

export function getXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationKey() {
  return ['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration'] as const
}

export function getXAmzTargetAmazonAthenaGetCapacityReservationKey() {
  return ['#X-Amz-Target=AmazonAthena.GetCapacityReservation'] as const
}

export function getXAmzTargetAmazonAthenaGetDataCatalogKey() {
  return ['#X-Amz-Target=AmazonAthena.GetDataCatalog'] as const
}

export function getXAmzTargetAmazonAthenaGetDatabaseKey() {
  return ['#X-Amz-Target=AmazonAthena.GetDatabase'] as const
}

export function getXAmzTargetAmazonAthenaGetNamedQueryKey() {
  return ['#X-Amz-Target=AmazonAthena.GetNamedQuery'] as const
}

export function getXAmzTargetAmazonAthenaGetNotebookMetadataKey() {
  return ['#X-Amz-Target=AmazonAthena.GetNotebookMetadata'] as const
}

export function getXAmzTargetAmazonAthenaGetPreparedStatementKey() {
  return ['#X-Amz-Target=AmazonAthena.GetPreparedStatement'] as const
}

export function getXAmzTargetAmazonAthenaGetQueryExecutionKey() {
  return ['#X-Amz-Target=AmazonAthena.GetQueryExecution'] as const
}

export function getXAmzTargetAmazonAthenaGetQueryResultsKey() {
  return ['#X-Amz-Target=AmazonAthena.GetQueryResults'] as const
}

export function getXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsKey() {
  return ['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics'] as const
}

export function getXAmzTargetAmazonAthenaGetSessionKey() {
  return ['#X-Amz-Target=AmazonAthena.GetSession'] as const
}

export function getXAmzTargetAmazonAthenaGetSessionStatusKey() {
  return ['#X-Amz-Target=AmazonAthena.GetSessionStatus'] as const
}

export function getXAmzTargetAmazonAthenaGetTableMetadataKey() {
  return ['#X-Amz-Target=AmazonAthena.GetTableMetadata'] as const
}

export function getXAmzTargetAmazonAthenaGetWorkGroupKey() {
  return ['#X-Amz-Target=AmazonAthena.GetWorkGroup'] as const
}

export function getXAmzTargetAmazonAthenaImportNotebookKey() {
  return ['#X-Amz-Target=AmazonAthena.ImportNotebook'] as const
}

export function getXAmzTargetAmazonAthenaListApplicationDPUSizesKey() {
  return ['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes'] as const
}

export function getXAmzTargetAmazonAthenaListCalculationExecutionsKey() {
  return ['#X-Amz-Target=AmazonAthena.ListCalculationExecutions'] as const
}

export function getXAmzTargetAmazonAthenaListCapacityReservationsKey() {
  return ['#X-Amz-Target=AmazonAthena.ListCapacityReservations'] as const
}

export function getXAmzTargetAmazonAthenaListDataCatalogsKey() {
  return ['#X-Amz-Target=AmazonAthena.ListDataCatalogs'] as const
}

export function getXAmzTargetAmazonAthenaListDatabasesKey() {
  return ['#X-Amz-Target=AmazonAthena.ListDatabases'] as const
}

export function getXAmzTargetAmazonAthenaListEngineVersionsKey() {
  return ['#X-Amz-Target=AmazonAthena.ListEngineVersions'] as const
}

export function getXAmzTargetAmazonAthenaListExecutorsKey() {
  return ['#X-Amz-Target=AmazonAthena.ListExecutors'] as const
}

export function getXAmzTargetAmazonAthenaListNamedQueriesKey() {
  return ['#X-Amz-Target=AmazonAthena.ListNamedQueries'] as const
}

export function getXAmzTargetAmazonAthenaListNotebookMetadataKey() {
  return ['#X-Amz-Target=AmazonAthena.ListNotebookMetadata'] as const
}

export function getXAmzTargetAmazonAthenaListNotebookSessionsKey() {
  return ['#X-Amz-Target=AmazonAthena.ListNotebookSessions'] as const
}

export function getXAmzTargetAmazonAthenaListPreparedStatementsKey() {
  return ['#X-Amz-Target=AmazonAthena.ListPreparedStatements'] as const
}

export function getXAmzTargetAmazonAthenaListQueryExecutionsKey() {
  return ['#X-Amz-Target=AmazonAthena.ListQueryExecutions'] as const
}

export function getXAmzTargetAmazonAthenaListSessionsKey() {
  return ['#X-Amz-Target=AmazonAthena.ListSessions'] as const
}

export function getXAmzTargetAmazonAthenaListTableMetadataKey() {
  return ['#X-Amz-Target=AmazonAthena.ListTableMetadata'] as const
}

export function getXAmzTargetAmazonAthenaListTagsForResourceKey() {
  return ['#X-Amz-Target=AmazonAthena.ListTagsForResource'] as const
}

export function getXAmzTargetAmazonAthenaListWorkGroupsKey() {
  return ['#X-Amz-Target=AmazonAthena.ListWorkGroups'] as const
}

export function getXAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationKey() {
  return ['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration'] as const
}

export function getXAmzTargetAmazonAthenaStartCalculationExecutionKey() {
  return ['#X-Amz-Target=AmazonAthena.StartCalculationExecution'] as const
}

export function getXAmzTargetAmazonAthenaStartQueryExecutionKey() {
  return ['#X-Amz-Target=AmazonAthena.StartQueryExecution'] as const
}

export function getXAmzTargetAmazonAthenaStartSessionKey() {
  return ['#X-Amz-Target=AmazonAthena.StartSession'] as const
}

export function getXAmzTargetAmazonAthenaStopCalculationExecutionKey() {
  return ['#X-Amz-Target=AmazonAthena.StopCalculationExecution'] as const
}

export function getXAmzTargetAmazonAthenaStopQueryExecutionKey() {
  return ['#X-Amz-Target=AmazonAthena.StopQueryExecution'] as const
}

export function getXAmzTargetAmazonAthenaTagResourceKey() {
  return ['#X-Amz-Target=AmazonAthena.TagResource'] as const
}

export function getXAmzTargetAmazonAthenaTerminateSessionKey() {
  return ['#X-Amz-Target=AmazonAthena.TerminateSession'] as const
}

export function getXAmzTargetAmazonAthenaUntagResourceKey() {
  return ['#X-Amz-Target=AmazonAthena.UntagResource'] as const
}

export function getXAmzTargetAmazonAthenaUpdateCapacityReservationKey() {
  return ['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation'] as const
}

export function getXAmzTargetAmazonAthenaUpdateDataCatalogKey() {
  return ['#X-Amz-Target=AmazonAthena.UpdateDataCatalog'] as const
}

export function getXAmzTargetAmazonAthenaUpdateNamedQueryKey() {
  return ['#X-Amz-Target=AmazonAthena.UpdateNamedQuery'] as const
}

export function getXAmzTargetAmazonAthenaUpdateNotebookKey() {
  return ['#X-Amz-Target=AmazonAthena.UpdateNotebook'] as const
}

export function getXAmzTargetAmazonAthenaUpdateNotebookMetadataKey() {
  return ['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata'] as const
}

export function getXAmzTargetAmazonAthenaUpdatePreparedStatementKey() {
  return ['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement'] as const
}

export function getXAmzTargetAmazonAthenaUpdateWorkGroupKey() {
  return ['#X-Amz-Target=AmazonAthena.UpdateWorkGroup'] as const
}

export function getPostXAmzTargetAmazonAthenaBatchGetNamedQueryMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.BatchGetNamedQuery',
    '/#X-Amz-Target=AmazonAthena.BatchGetNamedQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaBatchGetNamedQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaBatchGetNamedQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaBatchGetNamedQuery<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaBatchGetNamedQueryMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaBatchGetPreparedStatementMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement',
    '/#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaBatchGetPreparedStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaBatchGetPreparedStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaBatchGetPreparedStatement<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaBatchGetPreparedStatementMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaBatchGetQueryExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.BatchGetQueryExecution',
    '/#X-Amz-Target=AmazonAthena.BatchGetQueryExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaBatchGetQueryExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaBatchGetQueryExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaBatchGetQueryExecution<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaBatchGetQueryExecutionMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaCancelCapacityReservationMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CancelCapacityReservation',
    '/#X-Amz-Target=AmazonAthena.CancelCapacityReservation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaCancelCapacityReservationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.CancelCapacityReservation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.CancelCapacityReservation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaCancelCapacityReservationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.CancelCapacityReservation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.CancelCapacityReservation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaCancelCapacityReservation<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.CancelCapacityReservation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.CancelCapacityReservation']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaCancelCapacityReservationMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaCreateCapacityReservationMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreateCapacityReservation',
    '/#X-Amz-Target=AmazonAthena.CreateCapacityReservation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaCreateCapacityReservationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.CreateCapacityReservation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.CreateCapacityReservation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaCreateCapacityReservationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.CreateCapacityReservation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.CreateCapacityReservation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaCreateCapacityReservation<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.CreateCapacityReservation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.CreateCapacityReservation']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaCreateCapacityReservationMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaCreateDataCatalogMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreateDataCatalog',
    '/#X-Amz-Target=AmazonAthena.CreateDataCatalog',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaCreateDataCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateDataCatalog']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateDataCatalog']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaCreateDataCatalogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.CreateDataCatalog']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.CreateDataCatalog'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaCreateDataCatalog<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.CreateDataCatalog']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.CreateDataCatalog']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaCreateDataCatalogMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaCreateNamedQueryMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreateNamedQuery',
    '/#X-Amz-Target=AmazonAthena.CreateNamedQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaCreateNamedQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNamedQuery']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNamedQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaCreateNamedQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.CreateNamedQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.CreateNamedQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaCreateNamedQuery<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.CreateNamedQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNamedQuery']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaCreateNamedQueryMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaCreateNotebookMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreateNotebook',
    '/#X-Amz-Target=AmazonAthena.CreateNotebook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaCreateNotebookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNotebook']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNotebook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaCreateNotebookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNotebook']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.CreateNotebook'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaCreateNotebook<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNotebook']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNotebook']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaCreateNotebookMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaCreatePreparedStatementMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreatePreparedStatement',
    '/#X-Amz-Target=AmazonAthena.CreatePreparedStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaCreatePreparedStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.CreatePreparedStatement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.CreatePreparedStatement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaCreatePreparedStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.CreatePreparedStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.CreatePreparedStatement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaCreatePreparedStatement<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.CreatePreparedStatement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.CreatePreparedStatement']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaCreatePreparedStatementMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaCreatePresignedNotebookUrlMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl',
    '/#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaCreatePresignedNotebookUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaCreatePresignedNotebookUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaCreatePresignedNotebookUrl<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaCreatePresignedNotebookUrlMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaCreateWorkGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreateWorkGroup',
    '/#X-Amz-Target=AmazonAthena.CreateWorkGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaCreateWorkGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateWorkGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateWorkGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaCreateWorkGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.CreateWorkGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.CreateWorkGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaCreateWorkGroup<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateWorkGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateWorkGroup']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaCreateWorkGroupMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaDeleteCapacityReservationMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeleteCapacityReservation',
    '/#X-Amz-Target=AmazonAthena.DeleteCapacityReservation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaDeleteCapacityReservationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaDeleteCapacityReservationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaDeleteCapacityReservation<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaDeleteCapacityReservationMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaDeleteDataCatalogMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeleteDataCatalog',
    '/#X-Amz-Target=AmazonAthena.DeleteDataCatalog',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaDeleteDataCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteDataCatalog']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteDataCatalog']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaDeleteDataCatalogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.DeleteDataCatalog']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.DeleteDataCatalog'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaDeleteDataCatalog<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.DeleteDataCatalog']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.DeleteDataCatalog']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaDeleteDataCatalogMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaDeleteNamedQueryMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeleteNamedQuery',
    '/#X-Amz-Target=AmazonAthena.DeleteNamedQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaDeleteNamedQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNamedQuery']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNamedQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaDeleteNamedQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.DeleteNamedQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.DeleteNamedQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaDeleteNamedQuery<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.DeleteNamedQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNamedQuery']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaDeleteNamedQueryMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaDeleteNotebookMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeleteNotebook',
    '/#X-Amz-Target=AmazonAthena.DeleteNotebook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaDeleteNotebookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNotebook']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNotebook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaDeleteNotebookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNotebook']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.DeleteNotebook'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaDeleteNotebook<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNotebook']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNotebook']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaDeleteNotebookMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaDeletePreparedStatementMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeletePreparedStatement',
    '/#X-Amz-Target=AmazonAthena.DeletePreparedStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaDeletePreparedStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.DeletePreparedStatement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.DeletePreparedStatement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaDeletePreparedStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.DeletePreparedStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.DeletePreparedStatement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaDeletePreparedStatement<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.DeletePreparedStatement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.DeletePreparedStatement']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaDeletePreparedStatementMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaDeleteWorkGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeleteWorkGroup',
    '/#X-Amz-Target=AmazonAthena.DeleteWorkGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaDeleteWorkGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteWorkGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteWorkGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaDeleteWorkGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.DeleteWorkGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.DeleteWorkGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaDeleteWorkGroup<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteWorkGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteWorkGroup']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaDeleteWorkGroupMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaExportNotebookMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ExportNotebook',
    '/#X-Amz-Target=AmazonAthena.ExportNotebook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaExportNotebookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ExportNotebook']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ExportNotebook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaExportNotebookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ExportNotebook']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.ExportNotebook'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaExportNotebook<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ExportNotebook']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ExportNotebook']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaExportNotebookMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetCalculationExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetCalculationExecution',
    '/#X-Amz-Target=AmazonAthena.GetCalculationExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetCalculationExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetCalculationExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetCalculationExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetCalculationExecution<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetCalculationExecutionMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetCalculationExecutionCodeMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode',
    '/#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetCalculationExecutionCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetCalculationExecutionCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetCalculationExecutionCode<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetCalculationExecutionCodeMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetCalculationExecutionStatusMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus',
    '/#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetCalculationExecutionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetCalculationExecutionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetCalculationExecutionStatus<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus']['$post']
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
    getPostXAmzTargetAmazonAthenaGetCalculationExecutionStatusMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration',
    '/#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetCapacityAssignmentConfiguration<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration']['$post']
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
    getPostXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetCapacityReservationMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetCapacityReservation',
    '/#X-Amz-Target=AmazonAthena.GetCapacityReservation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetCapacityReservationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityReservation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityReservation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetCapacityReservationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityReservation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetCapacityReservation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetCapacityReservation<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityReservation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityReservation']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetCapacityReservationMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetDataCatalogMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetDataCatalog',
    '/#X-Amz-Target=AmazonAthena.GetDataCatalog',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetDataCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDataCatalog']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDataCatalog']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetDataCatalogMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDataCatalog']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.GetDataCatalog'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetDataCatalog<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDataCatalog']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDataCatalog']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetDataCatalogMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetDatabaseMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetDatabase',
    '/#X-Amz-Target=AmazonAthena.GetDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDatabase']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDatabase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDatabase']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.GetDatabase'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetDatabase<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDatabase']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDatabase']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetDatabaseMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetNamedQueryMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetNamedQuery',
    '/#X-Amz-Target=AmazonAthena.GetNamedQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetNamedQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNamedQuery']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNamedQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetNamedQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNamedQuery']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.GetNamedQuery'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetNamedQuery<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNamedQuery']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNamedQuery']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetNamedQueryMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetNotebookMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetNotebookMetadata',
    '/#X-Amz-Target=AmazonAthena.GetNotebookMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetNotebookMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNotebookMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNotebookMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetNotebookMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetNotebookMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetNotebookMetadata'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetNotebookMetadata<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetNotebookMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.GetNotebookMetadata']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetNotebookMetadataMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetPreparedStatementMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetPreparedStatement',
    '/#X-Amz-Target=AmazonAthena.GetPreparedStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetPreparedStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetPreparedStatement']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetPreparedStatement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetPreparedStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetPreparedStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetPreparedStatement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetPreparedStatement<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetPreparedStatement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.GetPreparedStatement']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetPreparedStatementMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetQueryExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetQueryExecution',
    '/#X-Amz-Target=AmazonAthena.GetQueryExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetQueryExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetQueryExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetQueryExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetQueryExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetQueryExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetQueryExecution<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetQueryExecutionMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetQueryResultsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetQueryResults',
    '/#X-Amz-Target=AmazonAthena.GetQueryResults',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetQueryResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetQueryResults']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetQueryResults']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetQueryResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryResults']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetQueryResults'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetQueryResults<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetQueryResults']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetQueryResults']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetQueryResultsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics',
    '/#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetQueryRuntimeStatistics<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetSessionMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetSession',
    '/#X-Amz-Target=AmazonAthena.GetSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.GetSession'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetSession<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSession']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSession']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetSessionMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetSessionStatusMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetSessionStatus',
    '/#X-Amz-Target=AmazonAthena.GetSessionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetSessionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSessionStatus']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSessionStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetSessionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetSessionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetSessionStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetSessionStatus<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetSessionStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSessionStatus']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetSessionStatusMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetTableMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetTableMetadata',
    '/#X-Amz-Target=AmazonAthena.GetTableMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetTableMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetTableMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetTableMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetTableMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.GetTableMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.GetTableMetadata'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetTableMetadata<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.GetTableMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetTableMetadata']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetTableMetadataMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaGetWorkGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetWorkGroup',
    '/#X-Amz-Target=AmazonAthena.GetWorkGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaGetWorkGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetWorkGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetWorkGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaGetWorkGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetWorkGroup']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.GetWorkGroup'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaGetWorkGroup<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetWorkGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetWorkGroup']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaGetWorkGroupMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaImportNotebookMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ImportNotebook',
    '/#X-Amz-Target=AmazonAthena.ImportNotebook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaImportNotebookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ImportNotebook']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ImportNotebook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaImportNotebookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ImportNotebook']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.ImportNotebook'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaImportNotebook<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ImportNotebook']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ImportNotebook']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaImportNotebookMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListApplicationDPUSizesMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes',
    '/#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListApplicationDPUSizesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListApplicationDPUSizesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListApplicationDPUSizes<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListApplicationDPUSizesMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListCalculationExecutionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListCalculationExecutions',
    '/#X-Amz-Target=AmazonAthena.ListCalculationExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListCalculationExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.ListCalculationExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.ListCalculationExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListCalculationExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListCalculationExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListCalculationExecutions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListCalculationExecutions<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListCalculationExecutions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.ListCalculationExecutions']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListCalculationExecutionsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListCapacityReservationsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListCapacityReservations',
    '/#X-Amz-Target=AmazonAthena.ListCapacityReservations',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListCapacityReservationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.ListCapacityReservations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.ListCapacityReservations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListCapacityReservationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListCapacityReservations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListCapacityReservations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListCapacityReservations<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListCapacityReservations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.ListCapacityReservations']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListCapacityReservationsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListDataCatalogsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListDataCatalogs',
    '/#X-Amz-Target=AmazonAthena.ListDataCatalogs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListDataCatalogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDataCatalogs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDataCatalogs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListDataCatalogsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListDataCatalogs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListDataCatalogs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListDataCatalogs<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListDataCatalogs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDataCatalogs']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListDataCatalogsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListDatabasesMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListDatabases',
    '/#X-Amz-Target=AmazonAthena.ListDatabases',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDatabases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDatabases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDatabases']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.ListDatabases'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListDatabases<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDatabases']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDatabases']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListDatabasesMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListEngineVersionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListEngineVersions',
    '/#X-Amz-Target=AmazonAthena.ListEngineVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListEngineVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListEngineVersions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListEngineVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListEngineVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListEngineVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListEngineVersions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListEngineVersions<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListEngineVersions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.ListEngineVersions']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListEngineVersionsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListExecutorsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListExecutors',
    '/#X-Amz-Target=AmazonAthena.ListExecutors',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListExecutorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListExecutors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListExecutors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListExecutorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListExecutors']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.ListExecutors'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListExecutors<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListExecutors']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListExecutors']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListExecutorsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListNamedQueriesMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListNamedQueries',
    '/#X-Amz-Target=AmazonAthena.ListNamedQueries',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListNamedQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNamedQueries']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNamedQueries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListNamedQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListNamedQueries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListNamedQueries'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListNamedQueries<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListNamedQueries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNamedQueries']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListNamedQueriesMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListNotebookMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListNotebookMetadata',
    '/#X-Amz-Target=AmazonAthena.ListNotebookMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListNotebookMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListNotebookMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListNotebookMetadata'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListNotebookMetadata<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookMetadata']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListNotebookMetadataMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListNotebookSessionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListNotebookSessions',
    '/#X-Amz-Target=AmazonAthena.ListNotebookSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListNotebookSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookSessions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookSessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListNotebookSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookSessions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListNotebookSessions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListNotebookSessions<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookSessions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookSessions']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListNotebookSessionsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListPreparedStatementsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListPreparedStatements',
    '/#X-Amz-Target=AmazonAthena.ListPreparedStatements',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListPreparedStatementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.ListPreparedStatements']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListPreparedStatements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListPreparedStatementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListPreparedStatements']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListPreparedStatements'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListPreparedStatements<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListPreparedStatements']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.ListPreparedStatements']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListPreparedStatementsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListQueryExecutionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListQueryExecutions',
    '/#X-Amz-Target=AmazonAthena.ListQueryExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListQueryExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListQueryExecutions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListQueryExecutions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListQueryExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListQueryExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListQueryExecutions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListQueryExecutions<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListQueryExecutions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.ListQueryExecutions']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListQueryExecutionsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListSessionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListSessions',
    '/#X-Amz-Target=AmazonAthena.ListSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListSessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListSessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListSessions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.ListSessions'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListSessions<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListSessions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListSessions']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListSessionsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListTableMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListTableMetadata',
    '/#X-Amz-Target=AmazonAthena.ListTableMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListTableMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListTableMetadata']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListTableMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListTableMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListTableMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListTableMetadata'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListTableMetadata<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListTableMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.ListTableMetadata']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListTableMetadataMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListTagsForResource',
    '/#X-Amz-Target=AmazonAthena.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.ListTagsForResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaListWorkGroupsMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListWorkGroups',
    '/#X-Amz-Target=AmazonAthena.ListWorkGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaListWorkGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListWorkGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListWorkGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaListWorkGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListWorkGroups']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.ListWorkGroups'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaListWorkGroups<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListWorkGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListWorkGroups']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaListWorkGroupsMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration',
    '/#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaPutCapacityAssignmentConfiguration<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration']['$post']
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
    getPostXAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaStartCalculationExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.StartCalculationExecution',
    '/#X-Amz-Target=AmazonAthena.StartCalculationExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaStartCalculationExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.StartCalculationExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.StartCalculationExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaStartCalculationExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.StartCalculationExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.StartCalculationExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaStartCalculationExecution<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.StartCalculationExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.StartCalculationExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaStartCalculationExecutionMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaStartQueryExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.StartQueryExecution',
    '/#X-Amz-Target=AmazonAthena.StartQueryExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaStartQueryExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.StartQueryExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StartQueryExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaStartQueryExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.StartQueryExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.StartQueryExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaStartQueryExecution<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.StartQueryExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.StartQueryExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaStartQueryExecutionMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaStartSessionMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.StartSession',
    '/#X-Amz-Target=AmazonAthena.StartSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaStartSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.StartSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StartSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaStartSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StartSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.StartSession'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaStartSession<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.StartSession']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StartSession']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaStartSessionMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaStopCalculationExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.StopCalculationExecution',
    '/#X-Amz-Target=AmazonAthena.StopCalculationExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaStopCalculationExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.StopCalculationExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.StopCalculationExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaStopCalculationExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.StopCalculationExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.StopCalculationExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaStopCalculationExecution<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.StopCalculationExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.StopCalculationExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaStopCalculationExecutionMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaStopQueryExecutionMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.StopQueryExecution',
    '/#X-Amz-Target=AmazonAthena.StopQueryExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaStopQueryExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.StopQueryExecution']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StopQueryExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaStopQueryExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.StopQueryExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.StopQueryExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaStopQueryExecution<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.StopQueryExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.StopQueryExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaStopQueryExecutionMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.TagResource',
    '/#X-Amz-Target=AmazonAthena.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaTagResource<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.TagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.TagResource']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaTagResourceMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaTerminateSessionMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.TerminateSession',
    '/#X-Amz-Target=AmazonAthena.TerminateSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaTerminateSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.TerminateSession']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.TerminateSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaTerminateSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.TerminateSession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.TerminateSession'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaTerminateSession<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.TerminateSession']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.TerminateSession']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaTerminateSessionMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UntagResource',
    '/#X-Amz-Target=AmazonAthena.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.UntagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaUntagResource<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.UntagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UntagResource']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaUntagResourceMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaUpdateCapacityReservationMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateCapacityReservation',
    '/#X-Amz-Target=AmazonAthena.UpdateCapacityReservation',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaUpdateCapacityReservationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaUpdateCapacityReservationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaUpdateCapacityReservation<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaUpdateCapacityReservationMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaUpdateDataCatalogMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateDataCatalog',
    '/#X-Amz-Target=AmazonAthena.UpdateDataCatalog',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaUpdateDataCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateDataCatalog']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateDataCatalog']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaUpdateDataCatalogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.UpdateDataCatalog']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.UpdateDataCatalog'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaUpdateDataCatalog<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.UpdateDataCatalog']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdateDataCatalog']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaUpdateDataCatalogMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaUpdateNamedQueryMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateNamedQuery',
    '/#X-Amz-Target=AmazonAthena.UpdateNamedQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaUpdateNamedQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNamedQuery']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNamedQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaUpdateNamedQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.UpdateNamedQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.UpdateNamedQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaUpdateNamedQuery<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.UpdateNamedQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNamedQuery']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaUpdateNamedQueryMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaUpdateNotebookMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateNotebook',
    '/#X-Amz-Target=AmazonAthena.UpdateNotebook',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaUpdateNotebookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebook']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaUpdateNotebookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebook']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonAthena.UpdateNotebook'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAmazonAthenaUpdateNotebook<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebook']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebook']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaUpdateNotebookMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaUpdateNotebookMetadataMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata',
    '/#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaUpdateNotebookMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaUpdateNotebookMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaUpdateNotebookMetadata<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaUpdateNotebookMetadataMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaUpdatePreparedStatementMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdatePreparedStatement',
    '/#X-Amz-Target=AmazonAthena.UpdatePreparedStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaUpdatePreparedStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaUpdatePreparedStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaUpdatePreparedStatement<
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
                    (typeof client)['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement']['$post']
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaUpdatePreparedStatementMutationOptions<
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

export function getPostXAmzTargetAmazonAthenaUpdateWorkGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateWorkGroup',
    '/#X-Amz-Target=AmazonAthena.UpdateWorkGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonAthenaUpdateWorkGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateWorkGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateWorkGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonAthenaUpdateWorkGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonAthena.UpdateWorkGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonAthena.UpdateWorkGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAmazonAthenaUpdateWorkGroup<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateWorkGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateWorkGroup']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAmazonAthenaUpdateWorkGroupMutationOptions<
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
