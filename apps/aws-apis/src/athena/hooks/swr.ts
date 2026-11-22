import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAmazonAthenaBatchGetNamedQueryKey() {
  return [
    '#X-Amz-Target=AmazonAthena.BatchGetNamedQuery',
    '/#X-Amz-Target=AmazonAthena.BatchGetNamedQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaBatchGetNamedQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaBatchGetNamedQueryKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.BatchGetNamedQuery'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaBatchGetPreparedStatementKey() {
  return [
    '#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement',
    '/#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaBatchGetPreparedStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaBatchGetPreparedStatementKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.BatchGetPreparedStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaBatchGetQueryExecutionKey() {
  return [
    '#X-Amz-Target=AmazonAthena.BatchGetQueryExecution',
    '/#X-Amz-Target=AmazonAthena.BatchGetQueryExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaBatchGetQueryExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaBatchGetQueryExecutionKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.BatchGetQueryExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaCancelCapacityReservationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CancelCapacityReservation',
    '/#X-Amz-Target=AmazonAthena.CancelCapacityReservation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaCancelCapacityReservation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.CancelCapacityReservation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaCancelCapacityReservationKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.CancelCapacityReservation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.CancelCapacityReservation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaCreateCapacityReservationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreateCapacityReservation',
    '/#X-Amz-Target=AmazonAthena.CreateCapacityReservation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaCreateCapacityReservation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.CreateCapacityReservation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaCreateCapacityReservationKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.CreateCapacityReservation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.CreateCapacityReservation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaCreateDataCatalogKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreateDataCatalog',
    '/#X-Amz-Target=AmazonAthena.CreateDataCatalog',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaCreateDataCatalog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateDataCatalog']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaCreateDataCatalogKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.CreateDataCatalog']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.CreateDataCatalog'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaCreateNamedQueryKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreateNamedQuery',
    '/#X-Amz-Target=AmazonAthena.CreateNamedQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaCreateNamedQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNamedQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaCreateNamedQueryKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.CreateNamedQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.CreateNamedQuery'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaCreateNotebookKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreateNotebook',
    '/#X-Amz-Target=AmazonAthena.CreateNotebook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaCreateNotebook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNotebook']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateNotebook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaCreateNotebookKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.CreateNotebook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.CreateNotebook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaCreatePreparedStatementKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreatePreparedStatement',
    '/#X-Amz-Target=AmazonAthena.CreatePreparedStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaCreatePreparedStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreatePreparedStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaCreatePreparedStatementKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.CreatePreparedStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.CreatePreparedStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaCreatePresignedNotebookUrlKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl',
    '/#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaCreatePresignedNotebookUrl<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaCreatePresignedNotebookUrlKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.CreatePresignedNotebookUrl'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaCreateWorkGroupKey() {
  return [
    '#X-Amz-Target=AmazonAthena.CreateWorkGroup',
    '/#X-Amz-Target=AmazonAthena.CreateWorkGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaCreateWorkGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.CreateWorkGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaCreateWorkGroupKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.CreateWorkGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.CreateWorkGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaDeleteCapacityReservationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeleteCapacityReservation',
    '/#X-Amz-Target=AmazonAthena.DeleteCapacityReservation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaDeleteCapacityReservation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaDeleteCapacityReservationKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.DeleteCapacityReservation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaDeleteDataCatalogKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeleteDataCatalog',
    '/#X-Amz-Target=AmazonAthena.DeleteDataCatalog',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaDeleteDataCatalog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteDataCatalog']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaDeleteDataCatalogKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.DeleteDataCatalog']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.DeleteDataCatalog'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaDeleteNamedQueryKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeleteNamedQuery',
    '/#X-Amz-Target=AmazonAthena.DeleteNamedQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaDeleteNamedQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNamedQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaDeleteNamedQueryKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.DeleteNamedQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.DeleteNamedQuery'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaDeleteNotebookKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeleteNotebook',
    '/#X-Amz-Target=AmazonAthena.DeleteNotebook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaDeleteNotebook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNotebook']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteNotebook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaDeleteNotebookKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.DeleteNotebook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.DeleteNotebook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaDeletePreparedStatementKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeletePreparedStatement',
    '/#X-Amz-Target=AmazonAthena.DeletePreparedStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaDeletePreparedStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeletePreparedStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaDeletePreparedStatementKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.DeletePreparedStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.DeletePreparedStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaDeleteWorkGroupKey() {
  return [
    '#X-Amz-Target=AmazonAthena.DeleteWorkGroup',
    '/#X-Amz-Target=AmazonAthena.DeleteWorkGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaDeleteWorkGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.DeleteWorkGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaDeleteWorkGroupKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.DeleteWorkGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.DeleteWorkGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaExportNotebookKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ExportNotebook',
    '/#X-Amz-Target=AmazonAthena.ExportNotebook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaExportNotebook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ExportNotebook']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ExportNotebook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaExportNotebookKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ExportNotebook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ExportNotebook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetCalculationExecutionKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetCalculationExecution',
    '/#X-Amz-Target=AmazonAthena.GetCalculationExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetCalculationExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetCalculationExecutionKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetCalculationExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetCalculationExecutionCodeKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode',
    '/#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetCalculationExecutionCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetCalculationExecutionCodeKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetCalculationExecutionCode'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetCalculationExecutionStatusKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus',
    '/#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetCalculationExecutionStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetCalculationExecutionStatusKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetCalculationExecutionStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration',
    '/#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetCapacityAssignmentConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetCapacityAssignmentConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetCapacityReservationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetCapacityReservation',
    '/#X-Amz-Target=AmazonAthena.GetCapacityReservation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetCapacityReservation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityReservation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetCapacityReservationKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetCapacityReservation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetCapacityReservation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetDataCatalogKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetDataCatalog',
    '/#X-Amz-Target=AmazonAthena.GetDataCatalog',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetDataCatalog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDataCatalog']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDataCatalog']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetDataCatalogKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetDataCatalog']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetDataCatalog'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetDatabaseKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetDatabase',
    '/#X-Amz-Target=AmazonAthena.GetDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDatabase']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDatabase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetDatabaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetDatabase']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonAthena.GetDatabase'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetNamedQueryKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetNamedQuery',
    '/#X-Amz-Target=AmazonAthena.GetNamedQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetNamedQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNamedQuery']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNamedQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetNamedQueryKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetNamedQuery']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonAthena.GetNamedQuery'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetNotebookMetadataKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetNotebookMetadata',
    '/#X-Amz-Target=AmazonAthena.GetNotebookMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetNotebookMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetNotebookMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetNotebookMetadataKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetNotebookMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetNotebookMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetPreparedStatementKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetPreparedStatement',
    '/#X-Amz-Target=AmazonAthena.GetPreparedStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetPreparedStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetPreparedStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetPreparedStatementKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetPreparedStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetPreparedStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetQueryExecutionKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetQueryExecution',
    '/#X-Amz-Target=AmazonAthena.GetQueryExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetQueryExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetQueryExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetQueryExecutionKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetQueryExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetQueryResultsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetQueryResults',
    '/#X-Amz-Target=AmazonAthena.GetQueryResults',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetQueryResults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetQueryResults']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetQueryResultsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryResults']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetQueryResults'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics',
    '/#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetQueryRuntimeStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetQueryRuntimeStatistics'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetSessionKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetSession',
    '/#X-Amz-Target=AmazonAthena.GetSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSession']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonAthena.GetSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetSessionStatusKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetSessionStatus',
    '/#X-Amz-Target=AmazonAthena.GetSessionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetSessionStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetSessionStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetSessionStatusKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetSessionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetSessionStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetTableMetadataKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetTableMetadata',
    '/#X-Amz-Target=AmazonAthena.GetTableMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetTableMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetTableMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetTableMetadataKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.GetTableMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.GetTableMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaGetWorkGroupKey() {
  return [
    '#X-Amz-Target=AmazonAthena.GetWorkGroup',
    '/#X-Amz-Target=AmazonAthena.GetWorkGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaGetWorkGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.GetWorkGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetWorkGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaGetWorkGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.GetWorkGroup']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonAthena.GetWorkGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaImportNotebookKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ImportNotebook',
    '/#X-Amz-Target=AmazonAthena.ImportNotebook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaImportNotebook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ImportNotebook']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ImportNotebook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaImportNotebookKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ImportNotebook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ImportNotebook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListApplicationDPUSizesKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes',
    '/#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListApplicationDPUSizes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListApplicationDPUSizesKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListApplicationDPUSizes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListCalculationExecutionsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListCalculationExecutions',
    '/#X-Amz-Target=AmazonAthena.ListCalculationExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListCalculationExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.ListCalculationExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListCalculationExecutionsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListCalculationExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListCalculationExecutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListCapacityReservationsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListCapacityReservations',
    '/#X-Amz-Target=AmazonAthena.ListCapacityReservations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListCapacityReservations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.ListCapacityReservations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListCapacityReservationsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListCapacityReservations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListCapacityReservations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListDataCatalogsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListDataCatalogs',
    '/#X-Amz-Target=AmazonAthena.ListDataCatalogs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListDataCatalogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDataCatalogs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListDataCatalogsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListDataCatalogs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListDataCatalogs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListDatabasesKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListDatabases',
    '/#X-Amz-Target=AmazonAthena.ListDatabases',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListDatabases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDatabases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListDatabases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListDatabasesKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListDatabases']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonAthena.ListDatabases'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListEngineVersionsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListEngineVersions',
    '/#X-Amz-Target=AmazonAthena.ListEngineVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListEngineVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListEngineVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListEngineVersionsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListEngineVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListEngineVersions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListExecutorsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListExecutors',
    '/#X-Amz-Target=AmazonAthena.ListExecutors',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListExecutors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListExecutors']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListExecutors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListExecutorsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListExecutors']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonAthena.ListExecutors'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListNamedQueriesKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListNamedQueries',
    '/#X-Amz-Target=AmazonAthena.ListNamedQueries',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListNamedQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNamedQueries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListNamedQueriesKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListNamedQueries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListNamedQueries'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListNotebookMetadataKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListNotebookMetadata',
    '/#X-Amz-Target=AmazonAthena.ListNotebookMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListNotebookMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListNotebookMetadataKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListNotebookMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListNotebookSessionsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListNotebookSessions',
    '/#X-Amz-Target=AmazonAthena.ListNotebookSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListNotebookSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookSessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListNotebookSessionsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListNotebookSessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListNotebookSessions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListPreparedStatementsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListPreparedStatements',
    '/#X-Amz-Target=AmazonAthena.ListPreparedStatements',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListPreparedStatements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListPreparedStatements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListPreparedStatementsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListPreparedStatements']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListPreparedStatements'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListQueryExecutionsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListQueryExecutions',
    '/#X-Amz-Target=AmazonAthena.ListQueryExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListQueryExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListQueryExecutions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListQueryExecutionsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListQueryExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListQueryExecutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListSessionsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListSessions',
    '/#X-Amz-Target=AmazonAthena.ListSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListSessions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListSessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListSessions']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonAthena.ListSessions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListTableMetadataKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListTableMetadata',
    '/#X-Amz-Target=AmazonAthena.ListTableMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListTableMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListTableMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListTableMetadataKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListTableMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListTableMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListTagsForResource',
    '/#X-Amz-Target=AmazonAthena.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaListWorkGroupsKey() {
  return [
    '#X-Amz-Target=AmazonAthena.ListWorkGroups',
    '/#X-Amz-Target=AmazonAthena.ListWorkGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaListWorkGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.ListWorkGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.ListWorkGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaListWorkGroupsKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.ListWorkGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.ListWorkGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration',
    '/#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaPutCapacityAssignmentConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.PutCapacityAssignmentConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaStartCalculationExecutionKey() {
  return [
    '#X-Amz-Target=AmazonAthena.StartCalculationExecution',
    '/#X-Amz-Target=AmazonAthena.StartCalculationExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaStartCalculationExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.StartCalculationExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaStartCalculationExecutionKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.StartCalculationExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.StartCalculationExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaStartQueryExecutionKey() {
  return [
    '#X-Amz-Target=AmazonAthena.StartQueryExecution',
    '/#X-Amz-Target=AmazonAthena.StartQueryExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaStartQueryExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StartQueryExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaStartQueryExecutionKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.StartQueryExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.StartQueryExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaStartSessionKey() {
  return [
    '#X-Amz-Target=AmazonAthena.StartSession',
    '/#X-Amz-Target=AmazonAthena.StartSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaStartSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.StartSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StartSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaStartSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StartSession']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonAthena.StartSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaStopCalculationExecutionKey() {
  return [
    '#X-Amz-Target=AmazonAthena.StopCalculationExecution',
    '/#X-Amz-Target=AmazonAthena.StopCalculationExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaStopCalculationExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.StopCalculationExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaStopCalculationExecutionKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.StopCalculationExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.StopCalculationExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaStopQueryExecutionKey() {
  return [
    '#X-Amz-Target=AmazonAthena.StopQueryExecution',
    '/#X-Amz-Target=AmazonAthena.StopQueryExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaStopQueryExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.StopQueryExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaStopQueryExecutionKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.StopQueryExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.StopQueryExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaTagResourceKey() {
  return [
    '#X-Amz-Target=AmazonAthena.TagResource',
    '/#X-Amz-Target=AmazonAthena.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.TagResource']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonAthena.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaTerminateSessionKey() {
  return [
    '#X-Amz-Target=AmazonAthena.TerminateSession',
    '/#X-Amz-Target=AmazonAthena.TerminateSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaTerminateSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.TerminateSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaTerminateSessionKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.TerminateSession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.TerminateSession'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaUntagResourceKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UntagResource',
    '/#X-Amz-Target=AmazonAthena.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonAthena.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaUpdateCapacityReservationKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateCapacityReservation',
    '/#X-Amz-Target=AmazonAthena.UpdateCapacityReservation',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaUpdateCapacityReservation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaUpdateCapacityReservationKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.UpdateCapacityReservation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaUpdateDataCatalogKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateDataCatalog',
    '/#X-Amz-Target=AmazonAthena.UpdateDataCatalog',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaUpdateDataCatalog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateDataCatalog']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaUpdateDataCatalogKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdateDataCatalog']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.UpdateDataCatalog'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaUpdateNamedQueryKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateNamedQuery',
    '/#X-Amz-Target=AmazonAthena.UpdateNamedQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaUpdateNamedQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNamedQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaUpdateNamedQueryKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdateNamedQuery']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.UpdateNamedQuery'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaUpdateNotebookKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateNotebook',
    '/#X-Amz-Target=AmazonAthena.UpdateNotebook',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaUpdateNotebook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebook']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaUpdateNotebookKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.UpdateNotebook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaUpdateNotebookMetadataKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata',
    '/#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaUpdateNotebookMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaUpdateNotebookMetadataKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.UpdateNotebookMetadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaUpdatePreparedStatementKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdatePreparedStatement',
    '/#X-Amz-Target=AmazonAthena.UpdatePreparedStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaUpdatePreparedStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaUpdatePreparedStatementKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.UpdatePreparedStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonAthenaUpdateWorkGroupKey() {
  return [
    '#X-Amz-Target=AmazonAthena.UpdateWorkGroup',
    '/#X-Amz-Target=AmazonAthena.UpdateWorkGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonAthenaUpdateWorkGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonAthena.UpdateWorkGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonAthenaUpdateWorkGroupKey()
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
            (typeof client)['#X-Amz-Target=AmazonAthena.UpdateWorkGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonAthena.UpdateWorkGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
