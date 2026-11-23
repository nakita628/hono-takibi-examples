import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBatchDeleteWorldsKey() {
  return ['batchDeleteWorlds'] as const
}

export function getBatchDescribeSimulationJobKey() {
  return ['batchDescribeSimulationJob'] as const
}

export function getCancelDeploymentJobKey() {
  return ['cancelDeploymentJob'] as const
}

export function getCancelSimulationJobKey() {
  return ['cancelSimulationJob'] as const
}

export function getCancelSimulationJobBatchKey() {
  return ['cancelSimulationJobBatch'] as const
}

export function getCancelWorldExportJobKey() {
  return ['cancelWorldExportJob'] as const
}

export function getCancelWorldGenerationJobKey() {
  return ['cancelWorldGenerationJob'] as const
}

export function getCreateDeploymentJobKey() {
  return ['createDeploymentJob'] as const
}

export function getCreateFleetKey() {
  return ['createFleet'] as const
}

export function getCreateRobotKey() {
  return ['createRobot'] as const
}

export function getCreateRobotApplicationKey() {
  return ['createRobotApplication'] as const
}

export function getCreateRobotApplicationVersionKey() {
  return ['createRobotApplicationVersion'] as const
}

export function getCreateSimulationApplicationKey() {
  return ['createSimulationApplication'] as const
}

export function getCreateSimulationApplicationVersionKey() {
  return ['createSimulationApplicationVersion'] as const
}

export function getCreateSimulationJobKey() {
  return ['createSimulationJob'] as const
}

export function getCreateWorldExportJobKey() {
  return ['createWorldExportJob'] as const
}

export function getCreateWorldGenerationJobKey() {
  return ['createWorldGenerationJob'] as const
}

export function getCreateWorldTemplateKey() {
  return ['createWorldTemplate'] as const
}

export function getDeleteFleetKey() {
  return ['deleteFleet'] as const
}

export function getDeleteRobotKey() {
  return ['deleteRobot'] as const
}

export function getDeleteRobotApplicationKey() {
  return ['deleteRobotApplication'] as const
}

export function getDeleteSimulationApplicationKey() {
  return ['deleteSimulationApplication'] as const
}

export function getDeleteWorldTemplateKey() {
  return ['deleteWorldTemplate'] as const
}

export function getDeregisterRobotKey() {
  return ['deregisterRobot'] as const
}

export function getDescribeDeploymentJobKey() {
  return ['describeDeploymentJob'] as const
}

export function getDescribeFleetKey() {
  return ['describeFleet'] as const
}

export function getDescribeRobotKey() {
  return ['describeRobot'] as const
}

export function getDescribeRobotApplicationKey() {
  return ['describeRobotApplication'] as const
}

export function getDescribeSimulationApplicationKey() {
  return ['describeSimulationApplication'] as const
}

export function getDescribeSimulationJobKey() {
  return ['describeSimulationJob'] as const
}

export function getDescribeSimulationJobBatchKey() {
  return ['describeSimulationJobBatch'] as const
}

export function getDescribeWorldKey() {
  return ['describeWorld'] as const
}

export function getDescribeWorldExportJobKey() {
  return ['describeWorldExportJob'] as const
}

export function getDescribeWorldGenerationJobKey() {
  return ['describeWorldGenerationJob'] as const
}

export function getDescribeWorldTemplateKey() {
  return ['describeWorldTemplate'] as const
}

export function getGetWorldTemplateBodyKey() {
  return ['getWorldTemplateBody'] as const
}

export function getListDeploymentJobsKey() {
  return ['listDeploymentJobs'] as const
}

export function getListFleetsKey() {
  return ['listFleets'] as const
}

export function getListRobotApplicationsKey() {
  return ['listRobotApplications'] as const
}

export function getListRobotsKey() {
  return ['listRobots'] as const
}

export function getListSimulationApplicationsKey() {
  return ['listSimulationApplications'] as const
}

export function getListSimulationJobBatchesKey() {
  return ['listSimulationJobBatches'] as const
}

export function getListSimulationJobsKey() {
  return ['listSimulationJobs'] as const
}

export function getListWorldExportJobsKey() {
  return ['listWorldExportJobs'] as const
}

export function getListWorldGenerationJobsKey() {
  return ['listWorldGenerationJobs'] as const
}

export function getListWorldTemplatesKey() {
  return ['listWorldTemplates'] as const
}

export function getListWorldsKey() {
  return ['listWorlds'] as const
}

export function getRegisterRobotKey() {
  return ['registerRobot'] as const
}

export function getRestartSimulationJobKey() {
  return ['restartSimulationJob'] as const
}

export function getStartSimulationJobBatchKey() {
  return ['startSimulationJobBatch'] as const
}

export function getSyncDeploymentJobKey() {
  return ['syncDeploymentJob'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getUpdateRobotApplicationKey() {
  return ['updateRobotApplication'] as const
}

export function getUpdateSimulationApplicationKey() {
  return ['updateSimulationApplication'] as const
}

export function getUpdateWorldTemplateKey() {
  return ['updateWorldTemplate'] as const
}

export function getPostBatchDeleteWorldsMutationKey() {
  return ['batchDeleteWorlds', '/batchDeleteWorlds', 'POST'] as const
}

export function getPostBatchDeleteWorldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batchDeleteWorlds.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.batchDeleteWorlds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchDeleteWorldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.batchDeleteWorlds.$post>) {
      return parseResponse(client.batchDeleteWorlds.$post(args, options))
    },
  })
}

export function usePostBatchDeleteWorlds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.batchDeleteWorlds.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.batchDeleteWorlds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBatchDeleteWorldsMutationOptions<TError, TOnMutateResult>(
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

export function getPostBatchDescribeSimulationJobMutationKey() {
  return ['batchDescribeSimulationJob', '/batchDescribeSimulationJob', 'POST'] as const
}

export function getPostBatchDescribeSimulationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.batchDescribeSimulationJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.batchDescribeSimulationJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchDescribeSimulationJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.batchDescribeSimulationJob.$post>) {
      return parseResponse(client.batchDescribeSimulationJob.$post(args, options))
    },
  })
}

export function usePostBatchDescribeSimulationJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.batchDescribeSimulationJob.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.batchDescribeSimulationJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBatchDescribeSimulationJobMutationOptions<
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

export function getPostCancelDeploymentJobMutationKey() {
  return ['cancelDeploymentJob', '/cancelDeploymentJob', 'POST'] as const
}

export function getPostCancelDeploymentJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancelDeploymentJob.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cancelDeploymentJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCancelDeploymentJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cancelDeploymentJob.$post>) {
      return parseResponse(client.cancelDeploymentJob.$post(args, options))
    },
  })
}

export function usePostCancelDeploymentJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cancelDeploymentJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cancelDeploymentJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCancelDeploymentJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostCancelSimulationJobMutationKey() {
  return ['cancelSimulationJob', '/cancelSimulationJob', 'POST'] as const
}

export function getPostCancelSimulationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancelSimulationJob.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cancelSimulationJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCancelSimulationJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cancelSimulationJob.$post>) {
      return parseResponse(client.cancelSimulationJob.$post(args, options))
    },
  })
}

export function usePostCancelSimulationJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cancelSimulationJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cancelSimulationJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCancelSimulationJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostCancelSimulationJobBatchMutationKey() {
  return ['cancelSimulationJobBatch', '/cancelSimulationJobBatch', 'POST'] as const
}

export function getPostCancelSimulationJobBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cancelSimulationJobBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cancelSimulationJobBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCancelSimulationJobBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cancelSimulationJobBatch.$post>) {
      return parseResponse(client.cancelSimulationJobBatch.$post(args, options))
    },
  })
}

export function usePostCancelSimulationJobBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cancelSimulationJobBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cancelSimulationJobBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCancelSimulationJobBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostCancelWorldExportJobMutationKey() {
  return ['cancelWorldExportJob', '/cancelWorldExportJob', 'POST'] as const
}

export function getPostCancelWorldExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cancelWorldExportJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cancelWorldExportJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCancelWorldExportJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cancelWorldExportJob.$post>) {
      return parseResponse(client.cancelWorldExportJob.$post(args, options))
    },
  })
}

export function usePostCancelWorldExportJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cancelWorldExportJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cancelWorldExportJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCancelWorldExportJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostCancelWorldGenerationJobMutationKey() {
  return ['cancelWorldGenerationJob', '/cancelWorldGenerationJob', 'POST'] as const
}

export function getPostCancelWorldGenerationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cancelWorldGenerationJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cancelWorldGenerationJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCancelWorldGenerationJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cancelWorldGenerationJob.$post>) {
      return parseResponse(client.cancelWorldGenerationJob.$post(args, options))
    },
  })
}

export function usePostCancelWorldGenerationJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cancelWorldGenerationJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cancelWorldGenerationJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCancelWorldGenerationJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateDeploymentJobMutationKey() {
  return ['createDeploymentJob', '/createDeploymentJob', 'POST'] as const
}

export function getPostCreateDeploymentJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDeploymentJob.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createDeploymentJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateDeploymentJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createDeploymentJob.$post>) {
      return parseResponse(client.createDeploymentJob.$post(args, options))
    },
  })
}

export function usePostCreateDeploymentJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createDeploymentJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createDeploymentJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateDeploymentJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateFleetMutationKey() {
  return ['createFleet', '/createFleet', 'POST'] as const
}

export function getPostCreateFleetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createFleet.$post>>>>>,
    TError,
    InferRequestType<typeof client.createFleet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateFleetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createFleet.$post>) {
      return parseResponse(client.createFleet.$post(args, options))
    },
  })
}

export function usePostCreateFleet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createFleet.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.createFleet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateFleetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreateRobotMutationKey() {
  return ['createRobot', '/createRobot', 'POST'] as const
}

export function getPostCreateRobotMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createRobot.$post>>>>>,
    TError,
    InferRequestType<typeof client.createRobot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateRobotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createRobot.$post>) {
      return parseResponse(client.createRobot.$post(args, options))
    },
  })
}

export function usePostCreateRobot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createRobot.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.createRobot.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateRobotMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreateRobotApplicationMutationKey() {
  return ['createRobotApplication', '/createRobotApplication', 'POST'] as const
}

export function getPostCreateRobotApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createRobotApplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createRobotApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateRobotApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createRobotApplication.$post>) {
      return parseResponse(client.createRobotApplication.$post(args, options))
    },
  })
}

export function usePostCreateRobotApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createRobotApplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createRobotApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateRobotApplicationMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateRobotApplicationVersionMutationKey() {
  return ['createRobotApplicationVersion', '/createRobotApplicationVersion', 'POST'] as const
}

export function getPostCreateRobotApplicationVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createRobotApplicationVersion.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createRobotApplicationVersion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateRobotApplicationVersionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createRobotApplicationVersion.$post>) {
      return parseResponse(client.createRobotApplicationVersion.$post(args, options))
    },
  })
}

export function usePostCreateRobotApplicationVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.createRobotApplicationVersion.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.createRobotApplicationVersion.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateRobotApplicationVersionMutationOptions<
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

export function getPostCreateSimulationApplicationMutationKey() {
  return ['createSimulationApplication', '/createSimulationApplication', 'POST'] as const
}

export function getPostCreateSimulationApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createSimulationApplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createSimulationApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateSimulationApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createSimulationApplication.$post>) {
      return parseResponse(client.createSimulationApplication.$post(args, options))
    },
  })
}

export function usePostCreateSimulationApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.createSimulationApplication.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.createSimulationApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateSimulationApplicationMutationOptions<
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

export function getPostCreateSimulationApplicationVersionMutationKey() {
  return [
    'createSimulationApplicationVersion',
    '/createSimulationApplicationVersion',
    'POST',
  ] as const
}

export function getPostCreateSimulationApplicationVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.createSimulationApplicationVersion.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.createSimulationApplicationVersion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateSimulationApplicationVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.createSimulationApplicationVersion.$post>,
    ) {
      return parseResponse(client.createSimulationApplicationVersion.$post(args, options))
    },
  })
}

export function usePostCreateSimulationApplicationVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.createSimulationApplicationVersion.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.createSimulationApplicationVersion.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateSimulationApplicationVersionMutationOptions<
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

export function getPostCreateSimulationJobMutationKey() {
  return ['createSimulationJob', '/createSimulationJob', 'POST'] as const
}

export function getPostCreateSimulationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSimulationJob.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createSimulationJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateSimulationJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createSimulationJob.$post>) {
      return parseResponse(client.createSimulationJob.$post(args, options))
    },
  })
}

export function usePostCreateSimulationJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createSimulationJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createSimulationJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateSimulationJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateWorldExportJobMutationKey() {
  return ['createWorldExportJob', '/createWorldExportJob', 'POST'] as const
}

export function getPostCreateWorldExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createWorldExportJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createWorldExportJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateWorldExportJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createWorldExportJob.$post>) {
      return parseResponse(client.createWorldExportJob.$post(args, options))
    },
  })
}

export function usePostCreateWorldExportJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createWorldExportJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createWorldExportJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateWorldExportJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateWorldGenerationJobMutationKey() {
  return ['createWorldGenerationJob', '/createWorldGenerationJob', 'POST'] as const
}

export function getPostCreateWorldGenerationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createWorldGenerationJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createWorldGenerationJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateWorldGenerationJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createWorldGenerationJob.$post>) {
      return parseResponse(client.createWorldGenerationJob.$post(args, options))
    },
  })
}

export function usePostCreateWorldGenerationJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createWorldGenerationJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createWorldGenerationJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateWorldGenerationJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostCreateWorldTemplateMutationKey() {
  return ['createWorldTemplate', '/createWorldTemplate', 'POST'] as const
}

export function getPostCreateWorldTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createWorldTemplate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createWorldTemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateWorldTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createWorldTemplate.$post>) {
      return parseResponse(client.createWorldTemplate.$post(args, options))
    },
  })
}

export function usePostCreateWorldTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createWorldTemplate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createWorldTemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateWorldTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteFleetMutationKey() {
  return ['deleteFleet', '/deleteFleet', 'POST'] as const
}

export function getPostDeleteFleetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteFleet.$post>>>>>,
    TError,
    InferRequestType<typeof client.deleteFleet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteFleetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteFleet.$post>) {
      return parseResponse(client.deleteFleet.$post(args, options))
    },
  })
}

export function usePostDeleteFleet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteFleet.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deleteFleet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteFleetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteRobotMutationKey() {
  return ['deleteRobot', '/deleteRobot', 'POST'] as const
}

export function getPostDeleteRobotMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteRobot.$post>>>>>,
    TError,
    InferRequestType<typeof client.deleteRobot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteRobotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteRobot.$post>) {
      return parseResponse(client.deleteRobot.$post(args, options))
    },
  })
}

export function usePostDeleteRobot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteRobot.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deleteRobot.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteRobotMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteRobotApplicationMutationKey() {
  return ['deleteRobotApplication', '/deleteRobotApplication', 'POST'] as const
}

export function getPostDeleteRobotApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteRobotApplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deleteRobotApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteRobotApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteRobotApplication.$post>) {
      return parseResponse(client.deleteRobotApplication.$post(args, options))
    },
  })
}

export function usePostDeleteRobotApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deleteRobotApplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deleteRobotApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteRobotApplicationMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeleteSimulationApplicationMutationKey() {
  return ['deleteSimulationApplication', '/deleteSimulationApplication', 'POST'] as const
}

export function getPostDeleteSimulationApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteSimulationApplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deleteSimulationApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteSimulationApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteSimulationApplication.$post>) {
      return parseResponse(client.deleteSimulationApplication.$post(args, options))
    },
  })
}

export function usePostDeleteSimulationApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.deleteSimulationApplication.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.deleteSimulationApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteSimulationApplicationMutationOptions<
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

export function getPostDeleteWorldTemplateMutationKey() {
  return ['deleteWorldTemplate', '/deleteWorldTemplate', 'POST'] as const
}

export function getPostDeleteWorldTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteWorldTemplate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteWorldTemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteWorldTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteWorldTemplate.$post>) {
      return parseResponse(client.deleteWorldTemplate.$post(args, options))
    },
  })
}

export function usePostDeleteWorldTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deleteWorldTemplate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deleteWorldTemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteWorldTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeregisterRobotMutationKey() {
  return ['deregisterRobot', '/deregisterRobot', 'POST'] as const
}

export function getPostDeregisterRobotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deregisterRobot.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deregisterRobot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeregisterRobotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deregisterRobot.$post>) {
      return parseResponse(client.deregisterRobot.$post(args, options))
    },
  })
}

export function usePostDeregisterRobot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deregisterRobot.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deregisterRobot.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeregisterRobotMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeDeploymentJobMutationKey() {
  return ['describeDeploymentJob', '/describeDeploymentJob', 'POST'] as const
}

export function getPostDescribeDeploymentJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeDeploymentJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeDeploymentJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeDeploymentJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeDeploymentJob.$post>) {
      return parseResponse(client.describeDeploymentJob.$post(args, options))
    },
  })
}

export function usePostDescribeDeploymentJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.describeDeploymentJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.describeDeploymentJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeDeploymentJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeFleetMutationKey() {
  return ['describeFleet', '/describeFleet', 'POST'] as const
}

export function getPostDescribeFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeFleet.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.describeFleet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeFleetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeFleet.$post>) {
      return parseResponse(client.describeFleet.$post(args, options))
    },
  })
}

export function usePostDescribeFleet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeFleet.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.describeFleet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeFleetMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeRobotMutationKey() {
  return ['describeRobot', '/describeRobot', 'POST'] as const
}

export function getPostDescribeRobotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeRobot.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.describeRobot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeRobotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeRobot.$post>) {
      return parseResponse(client.describeRobot.$post(args, options))
    },
  })
}

export function usePostDescribeRobot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeRobot.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.describeRobot.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeRobotMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeRobotApplicationMutationKey() {
  return ['describeRobotApplication', '/describeRobotApplication', 'POST'] as const
}

export function getPostDescribeRobotApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeRobotApplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeRobotApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeRobotApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeRobotApplication.$post>) {
      return parseResponse(client.describeRobotApplication.$post(args, options))
    },
  })
}

export function usePostDescribeRobotApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.describeRobotApplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.describeRobotApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeRobotApplicationMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeSimulationApplicationMutationKey() {
  return ['describeSimulationApplication', '/describeSimulationApplication', 'POST'] as const
}

export function getPostDescribeSimulationApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeSimulationApplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeSimulationApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeSimulationApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeSimulationApplication.$post>) {
      return parseResponse(client.describeSimulationApplication.$post(args, options))
    },
  })
}

export function usePostDescribeSimulationApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.describeSimulationApplication.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.describeSimulationApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeSimulationApplicationMutationOptions<
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

export function getPostDescribeSimulationJobMutationKey() {
  return ['describeSimulationJob', '/describeSimulationJob', 'POST'] as const
}

export function getPostDescribeSimulationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeSimulationJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeSimulationJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeSimulationJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeSimulationJob.$post>) {
      return parseResponse(client.describeSimulationJob.$post(args, options))
    },
  })
}

export function usePostDescribeSimulationJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.describeSimulationJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.describeSimulationJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeSimulationJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeSimulationJobBatchMutationKey() {
  return ['describeSimulationJobBatch', '/describeSimulationJobBatch', 'POST'] as const
}

export function getPostDescribeSimulationJobBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeSimulationJobBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeSimulationJobBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeSimulationJobBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeSimulationJobBatch.$post>) {
      return parseResponse(client.describeSimulationJobBatch.$post(args, options))
    },
  })
}

export function usePostDescribeSimulationJobBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.describeSimulationJobBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.describeSimulationJobBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeSimulationJobBatchMutationOptions<
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

export function getPostDescribeWorldMutationKey() {
  return ['describeWorld', '/describeWorld', 'POST'] as const
}

export function getPostDescribeWorldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeWorld.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.describeWorld.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeWorldMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeWorld.$post>) {
      return parseResponse(client.describeWorld.$post(args, options))
    },
  })
}

export function usePostDescribeWorld<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeWorld.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.describeWorld.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeWorldMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeWorldExportJobMutationKey() {
  return ['describeWorldExportJob', '/describeWorldExportJob', 'POST'] as const
}

export function getPostDescribeWorldExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeWorldExportJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeWorldExportJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeWorldExportJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeWorldExportJob.$post>) {
      return parseResponse(client.describeWorldExportJob.$post(args, options))
    },
  })
}

export function usePostDescribeWorldExportJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.describeWorldExportJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.describeWorldExportJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeWorldExportJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostDescribeWorldGenerationJobMutationKey() {
  return ['describeWorldGenerationJob', '/describeWorldGenerationJob', 'POST'] as const
}

export function getPostDescribeWorldGenerationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeWorldGenerationJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeWorldGenerationJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeWorldGenerationJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeWorldGenerationJob.$post>) {
      return parseResponse(client.describeWorldGenerationJob.$post(args, options))
    },
  })
}

export function usePostDescribeWorldGenerationJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.describeWorldGenerationJob.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.describeWorldGenerationJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeWorldGenerationJobMutationOptions<
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

export function getPostDescribeWorldTemplateMutationKey() {
  return ['describeWorldTemplate', '/describeWorldTemplate', 'POST'] as const
}

export function getPostDescribeWorldTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeWorldTemplate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeWorldTemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeWorldTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeWorldTemplate.$post>) {
      return parseResponse(client.describeWorldTemplate.$post(args, options))
    },
  })
}

export function usePostDescribeWorldTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.describeWorldTemplate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.describeWorldTemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeWorldTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetWorldTemplateBodyMutationKey() {
  return ['getWorldTemplateBody', '/getWorldTemplateBody', 'POST'] as const
}

export function getPostGetWorldTemplateBodyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getWorldTemplateBody.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getWorldTemplateBody.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetWorldTemplateBodyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getWorldTemplateBody.$post>) {
      return parseResponse(client.getWorldTemplateBody.$post(args, options))
    },
  })
}

export function usePostGetWorldTemplateBody<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getWorldTemplateBody.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.getWorldTemplateBody.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetWorldTemplateBodyMutationOptions<TError, TOnMutateResult>(
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

export function getPostListDeploymentJobsMutationKey() {
  return ['listDeploymentJobs', '/listDeploymentJobs', 'POST'] as const
}

export function getPostListDeploymentJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listDeploymentJobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listDeploymentJobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListDeploymentJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listDeploymentJobs.$post>) {
      return parseResponse(client.listDeploymentJobs.$post(args, options))
    },
  })
}

export function usePostListDeploymentJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listDeploymentJobs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listDeploymentJobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListDeploymentJobsMutationOptions<TError, TOnMutateResult>(
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

export function getPostListFleetsMutationKey() {
  return ['listFleets', '/listFleets', 'POST'] as const
}

export function getPostListFleetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFleets.$post>>>>>,
    TError,
    InferRequestType<typeof client.listFleets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListFleetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listFleets.$post>) {
      return parseResponse(client.listFleets.$post(args, options))
    },
  })
}

export function usePostListFleets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFleets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.listFleets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListFleetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListRobotApplicationsMutationKey() {
  return ['listRobotApplications', '/listRobotApplications', 'POST'] as const
}

export function getPostListRobotApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listRobotApplications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listRobotApplications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListRobotApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listRobotApplications.$post>) {
      return parseResponse(client.listRobotApplications.$post(args, options))
    },
  })
}

export function usePostListRobotApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listRobotApplications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listRobotApplications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListRobotApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostListRobotsMutationKey() {
  return ['listRobots', '/listRobots', 'POST'] as const
}

export function getPostListRobotsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listRobots.$post>>>>>,
    TError,
    InferRequestType<typeof client.listRobots.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListRobotsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listRobots.$post>) {
      return parseResponse(client.listRobots.$post(args, options))
    },
  })
}

export function usePostListRobots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listRobots.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.listRobots.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListRobotsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListSimulationApplicationsMutationKey() {
  return ['listSimulationApplications', '/listSimulationApplications', 'POST'] as const
}

export function getPostListSimulationApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listSimulationApplications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listSimulationApplications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListSimulationApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listSimulationApplications.$post>) {
      return parseResponse(client.listSimulationApplications.$post(args, options))
    },
  })
}

export function usePostListSimulationApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.listSimulationApplications.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.listSimulationApplications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListSimulationApplicationsMutationOptions<
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

export function getPostListSimulationJobBatchesMutationKey() {
  return ['listSimulationJobBatches', '/listSimulationJobBatches', 'POST'] as const
}

export function getPostListSimulationJobBatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listSimulationJobBatches.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listSimulationJobBatches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListSimulationJobBatchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listSimulationJobBatches.$post>) {
      return parseResponse(client.listSimulationJobBatches.$post(args, options))
    },
  })
}

export function usePostListSimulationJobBatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listSimulationJobBatches.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listSimulationJobBatches.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListSimulationJobBatchesMutationOptions<TError, TOnMutateResult>(
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

export function getPostListSimulationJobsMutationKey() {
  return ['listSimulationJobs', '/listSimulationJobs', 'POST'] as const
}

export function getPostListSimulationJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSimulationJobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listSimulationJobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListSimulationJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listSimulationJobs.$post>) {
      return parseResponse(client.listSimulationJobs.$post(args, options))
    },
  })
}

export function usePostListSimulationJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listSimulationJobs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listSimulationJobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListSimulationJobsMutationOptions<TError, TOnMutateResult>(
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

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function getPostListWorldExportJobsMutationKey() {
  return ['listWorldExportJobs', '/listWorldExportJobs', 'POST'] as const
}

export function getPostListWorldExportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listWorldExportJobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listWorldExportJobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListWorldExportJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listWorldExportJobs.$post>) {
      return parseResponse(client.listWorldExportJobs.$post(args, options))
    },
  })
}

export function usePostListWorldExportJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listWorldExportJobs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listWorldExportJobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListWorldExportJobsMutationOptions<TError, TOnMutateResult>(
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

export function getPostListWorldGenerationJobsMutationKey() {
  return ['listWorldGenerationJobs', '/listWorldGenerationJobs', 'POST'] as const
}

export function getPostListWorldGenerationJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listWorldGenerationJobs.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listWorldGenerationJobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListWorldGenerationJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listWorldGenerationJobs.$post>) {
      return parseResponse(client.listWorldGenerationJobs.$post(args, options))
    },
  })
}

export function usePostListWorldGenerationJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listWorldGenerationJobs.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listWorldGenerationJobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListWorldGenerationJobsMutationOptions<TError, TOnMutateResult>(
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

export function getPostListWorldTemplatesMutationKey() {
  return ['listWorldTemplates', '/listWorldTemplates', 'POST'] as const
}

export function getPostListWorldTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listWorldTemplates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listWorldTemplates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListWorldTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listWorldTemplates.$post>) {
      return parseResponse(client.listWorldTemplates.$post(args, options))
    },
  })
}

export function usePostListWorldTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listWorldTemplates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listWorldTemplates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListWorldTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getPostListWorldsMutationKey() {
  return ['listWorlds', '/listWorlds', 'POST'] as const
}

export function getPostListWorldsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listWorlds.$post>>>>>,
    TError,
    InferRequestType<typeof client.listWorlds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListWorldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listWorlds.$post>) {
      return parseResponse(client.listWorlds.$post(args, options))
    },
  })
}

export function usePostListWorlds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listWorlds.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.listWorlds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListWorldsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRegisterRobotMutationKey() {
  return ['registerRobot', '/registerRobot', 'POST'] as const
}

export function getPostRegisterRobotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registerRobot.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.registerRobot.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegisterRobotMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.registerRobot.$post>) {
      return parseResponse(client.registerRobot.$post(args, options))
    },
  })
}

export function usePostRegisterRobot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registerRobot.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.registerRobot.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegisterRobotMutationOptions<TError, TOnMutateResult>(
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

export function getPostRestartSimulationJobMutationKey() {
  return ['restartSimulationJob', '/restartSimulationJob', 'POST'] as const
}

export function getPostRestartSimulationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.restartSimulationJob.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.restartSimulationJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestartSimulationJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.restartSimulationJob.$post>) {
      return parseResponse(client.restartSimulationJob.$post(args, options))
    },
  })
}

export function usePostRestartSimulationJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.restartSimulationJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.restartSimulationJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRestartSimulationJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostStartSimulationJobBatchMutationKey() {
  return ['startSimulationJobBatch', '/startSimulationJobBatch', 'POST'] as const
}

export function getPostStartSimulationJobBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.startSimulationJobBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.startSimulationJobBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartSimulationJobBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.startSimulationJobBatch.$post>) {
      return parseResponse(client.startSimulationJobBatch.$post(args, options))
    },
  })
}

export function usePostStartSimulationJobBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.startSimulationJobBatch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.startSimulationJobBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStartSimulationJobBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncDeploymentJobMutationKey() {
  return ['syncDeploymentJob', '/syncDeploymentJob', 'POST'] as const
}

export function getPostSyncDeploymentJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.syncDeploymentJob.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.syncDeploymentJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncDeploymentJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.syncDeploymentJob.$post>) {
      return parseResponse(client.syncDeploymentJob.$post(args, options))
    },
  })
}

export function usePostSyncDeploymentJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.syncDeploymentJob.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.syncDeploymentJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncDeploymentJobMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateRobotApplicationMutationKey() {
  return ['updateRobotApplication', '/updateRobotApplication', 'POST'] as const
}

export function getPostUpdateRobotApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateRobotApplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.updateRobotApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateRobotApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateRobotApplication.$post>) {
      return parseResponse(client.updateRobotApplication.$post(args, options))
    },
  })
}

export function usePostUpdateRobotApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.updateRobotApplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.updateRobotApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateRobotApplicationMutationOptions<TError, TOnMutateResult>(
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

export function getPostUpdateSimulationApplicationMutationKey() {
  return ['updateSimulationApplication', '/updateSimulationApplication', 'POST'] as const
}

export function getPostUpdateSimulationApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateSimulationApplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.updateSimulationApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateSimulationApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateSimulationApplication.$post>) {
      return parseResponse(client.updateSimulationApplication.$post(args, options))
    },
  })
}

export function usePostUpdateSimulationApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.updateSimulationApplication.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.updateSimulationApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateSimulationApplicationMutationOptions<
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

export function getPostUpdateWorldTemplateMutationKey() {
  return ['updateWorldTemplate', '/updateWorldTemplate', 'POST'] as const
}

export function getPostUpdateWorldTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateWorldTemplate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.updateWorldTemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateWorldTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateWorldTemplate.$post>) {
      return parseResponse(client.updateWorldTemplate.$post(args, options))
    },
  })
}

export function usePostUpdateWorldTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.updateWorldTemplate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.updateWorldTemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateWorldTemplateMutationOptions<TError, TOnMutateResult>(
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
