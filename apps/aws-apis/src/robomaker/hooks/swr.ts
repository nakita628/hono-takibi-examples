import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostBatchDeleteWorldsKey() {
  return ['batchDeleteWorlds', '/batchDeleteWorlds', 'POST'] as const
}

export function usePostBatchDeleteWorlds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batchDeleteWorlds.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.batchDeleteWorlds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchDeleteWorldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.batchDeleteWorlds.$post> }) =>
        parseResponse(client.batchDeleteWorlds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBatchDescribeSimulationJobKey() {
  return ['batchDescribeSimulationJob', '/batchDescribeSimulationJob', 'POST'] as const
}

export function usePostBatchDescribeSimulationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.batchDescribeSimulationJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.batchDescribeSimulationJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchDescribeSimulationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.batchDescribeSimulationJob.$post> },
      ) => parseResponse(client.batchDescribeSimulationJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCancelDeploymentJobKey() {
  return ['cancelDeploymentJob', '/cancelDeploymentJob', 'POST'] as const
}

export function usePostCancelDeploymentJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancelDeploymentJob.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cancelDeploymentJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCancelDeploymentJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cancelDeploymentJob.$post> }) =>
        parseResponse(client.cancelDeploymentJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCancelSimulationJobKey() {
  return ['cancelSimulationJob', '/cancelSimulationJob', 'POST'] as const
}

export function usePostCancelSimulationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cancelSimulationJob.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cancelSimulationJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCancelSimulationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cancelSimulationJob.$post> }) =>
        parseResponse(client.cancelSimulationJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCancelSimulationJobBatchKey() {
  return ['cancelSimulationJobBatch', '/cancelSimulationJobBatch', 'POST'] as const
}

export function usePostCancelSimulationJobBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cancelSimulationJobBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cancelSimulationJobBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCancelSimulationJobBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cancelSimulationJobBatch.$post> },
      ) => parseResponse(client.cancelSimulationJobBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCancelWorldExportJobKey() {
  return ['cancelWorldExportJob', '/cancelWorldExportJob', 'POST'] as const
}

export function usePostCancelWorldExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cancelWorldExportJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cancelWorldExportJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCancelWorldExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cancelWorldExportJob.$post> },
      ) => parseResponse(client.cancelWorldExportJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCancelWorldGenerationJobKey() {
  return ['cancelWorldGenerationJob', '/cancelWorldGenerationJob', 'POST'] as const
}

export function usePostCancelWorldGenerationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cancelWorldGenerationJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cancelWorldGenerationJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCancelWorldGenerationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cancelWorldGenerationJob.$post> },
      ) => parseResponse(client.cancelWorldGenerationJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateDeploymentJobKey() {
  return ['createDeploymentJob', '/createDeploymentJob', 'POST'] as const
}

export function usePostCreateDeploymentJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createDeploymentJob.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createDeploymentJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateDeploymentJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createDeploymentJob.$post> }) =>
        parseResponse(client.createDeploymentJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateFleetKey() {
  return ['createFleet', '/createFleet', 'POST'] as const
}

export function usePostCreateFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createFleet.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.createFleet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createFleet.$post> }) =>
        parseResponse(client.createFleet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateRobotKey() {
  return ['createRobot', '/createRobot', 'POST'] as const
}

export function usePostCreateRobot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createRobot.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.createRobot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateRobotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createRobot.$post> }) =>
        parseResponse(client.createRobot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateRobotApplicationKey() {
  return ['createRobotApplication', '/createRobotApplication', 'POST'] as const
}

export function usePostCreateRobotApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createRobotApplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createRobotApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateRobotApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createRobotApplication.$post> },
      ) => parseResponse(client.createRobotApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateRobotApplicationVersionKey() {
  return ['createRobotApplicationVersion', '/createRobotApplicationVersion', 'POST'] as const
}

export function usePostCreateRobotApplicationVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createRobotApplicationVersion.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createRobotApplicationVersion.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateRobotApplicationVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createRobotApplicationVersion.$post> },
      ) => parseResponse(client.createRobotApplicationVersion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateSimulationApplicationKey() {
  return ['createSimulationApplication', '/createSimulationApplication', 'POST'] as const
}

export function usePostCreateSimulationApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createSimulationApplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createSimulationApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateSimulationApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createSimulationApplication.$post> },
      ) => parseResponse(client.createSimulationApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateSimulationApplicationVersionKey() {
  return [
    'createSimulationApplicationVersion',
    '/createSimulationApplicationVersion',
    'POST',
  ] as const
}

export function usePostCreateSimulationApplicationVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.createSimulationApplicationVersion.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createSimulationApplicationVersion.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateSimulationApplicationVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createSimulationApplicationVersion.$post> },
      ) => parseResponse(client.createSimulationApplicationVersion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateSimulationJobKey() {
  return ['createSimulationJob', '/createSimulationJob', 'POST'] as const
}

export function usePostCreateSimulationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createSimulationJob.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createSimulationJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateSimulationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createSimulationJob.$post> }) =>
        parseResponse(client.createSimulationJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateWorldExportJobKey() {
  return ['createWorldExportJob', '/createWorldExportJob', 'POST'] as const
}

export function usePostCreateWorldExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createWorldExportJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createWorldExportJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateWorldExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createWorldExportJob.$post> },
      ) => parseResponse(client.createWorldExportJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateWorldGenerationJobKey() {
  return ['createWorldGenerationJob', '/createWorldGenerationJob', 'POST'] as const
}

export function usePostCreateWorldGenerationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createWorldGenerationJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createWorldGenerationJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateWorldGenerationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createWorldGenerationJob.$post> },
      ) => parseResponse(client.createWorldGenerationJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateWorldTemplateKey() {
  return ['createWorldTemplate', '/createWorldTemplate', 'POST'] as const
}

export function usePostCreateWorldTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createWorldTemplate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createWorldTemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateWorldTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createWorldTemplate.$post> }) =>
        parseResponse(client.createWorldTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteFleetKey() {
  return ['deleteFleet', '/deleteFleet', 'POST'] as const
}

export function usePostDeleteFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteFleet.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.deleteFleet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteFleet.$post> }) =>
        parseResponse(client.deleteFleet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteRobotKey() {
  return ['deleteRobot', '/deleteRobot', 'POST'] as const
}

export function usePostDeleteRobot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteRobot.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.deleteRobot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteRobotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteRobot.$post> }) =>
        parseResponse(client.deleteRobot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteRobotApplicationKey() {
  return ['deleteRobotApplication', '/deleteRobotApplication', 'POST'] as const
}

export function usePostDeleteRobotApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteRobotApplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteRobotApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteRobotApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteRobotApplication.$post> },
      ) => parseResponse(client.deleteRobotApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteSimulationApplicationKey() {
  return ['deleteSimulationApplication', '/deleteSimulationApplication', 'POST'] as const
}

export function usePostDeleteSimulationApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteSimulationApplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteSimulationApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteSimulationApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteSimulationApplication.$post> },
      ) => parseResponse(client.deleteSimulationApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteWorldTemplateKey() {
  return ['deleteWorldTemplate', '/deleteWorldTemplate', 'POST'] as const
}

export function usePostDeleteWorldTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteWorldTemplate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteWorldTemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteWorldTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteWorldTemplate.$post> }) =>
        parseResponse(client.deleteWorldTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeregisterRobotKey() {
  return ['deregisterRobot', '/deregisterRobot', 'POST'] as const
}

export function usePostDeregisterRobot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deregisterRobot.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.deregisterRobot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeregisterRobotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deregisterRobot.$post> }) =>
        parseResponse(client.deregisterRobot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeDeploymentJobKey() {
  return ['describeDeploymentJob', '/describeDeploymentJob', 'POST'] as const
}

export function usePostDescribeDeploymentJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeDeploymentJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeDeploymentJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeDeploymentJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeDeploymentJob.$post> },
      ) => parseResponse(client.describeDeploymentJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeFleetKey() {
  return ['describeFleet', '/describeFleet', 'POST'] as const
}

export function usePostDescribeFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeFleet.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeFleet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.describeFleet.$post> }) =>
        parseResponse(client.describeFleet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeRobotKey() {
  return ['describeRobot', '/describeRobot', 'POST'] as const
}

export function usePostDescribeRobot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeRobot.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeRobot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeRobotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.describeRobot.$post> }) =>
        parseResponse(client.describeRobot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeRobotApplicationKey() {
  return ['describeRobotApplication', '/describeRobotApplication', 'POST'] as const
}

export function usePostDescribeRobotApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeRobotApplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeRobotApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeRobotApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeRobotApplication.$post> },
      ) => parseResponse(client.describeRobotApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeSimulationApplicationKey() {
  return ['describeSimulationApplication', '/describeSimulationApplication', 'POST'] as const
}

export function usePostDescribeSimulationApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeSimulationApplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeSimulationApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeSimulationApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeSimulationApplication.$post> },
      ) => parseResponse(client.describeSimulationApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeSimulationJobKey() {
  return ['describeSimulationJob', '/describeSimulationJob', 'POST'] as const
}

export function usePostDescribeSimulationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeSimulationJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeSimulationJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeSimulationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeSimulationJob.$post> },
      ) => parseResponse(client.describeSimulationJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeSimulationJobBatchKey() {
  return ['describeSimulationJobBatch', '/describeSimulationJobBatch', 'POST'] as const
}

export function usePostDescribeSimulationJobBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeSimulationJobBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeSimulationJobBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeSimulationJobBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeSimulationJobBatch.$post> },
      ) => parseResponse(client.describeSimulationJobBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeWorldKey() {
  return ['describeWorld', '/describeWorld', 'POST'] as const
}

export function usePostDescribeWorld<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describeWorld.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeWorld.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeWorldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.describeWorld.$post> }) =>
        parseResponse(client.describeWorld.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeWorldExportJobKey() {
  return ['describeWorldExportJob', '/describeWorldExportJob', 'POST'] as const
}

export function usePostDescribeWorldExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeWorldExportJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeWorldExportJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeWorldExportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeWorldExportJob.$post> },
      ) => parseResponse(client.describeWorldExportJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeWorldGenerationJobKey() {
  return ['describeWorldGenerationJob', '/describeWorldGenerationJob', 'POST'] as const
}

export function usePostDescribeWorldGenerationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeWorldGenerationJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeWorldGenerationJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeWorldGenerationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeWorldGenerationJob.$post> },
      ) => parseResponse(client.describeWorldGenerationJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeWorldTemplateKey() {
  return ['describeWorldTemplate', '/describeWorldTemplate', 'POST'] as const
}

export function usePostDescribeWorldTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeWorldTemplate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.describeWorldTemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeWorldTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.describeWorldTemplate.$post> },
      ) => parseResponse(client.describeWorldTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetWorldTemplateBodyKey() {
  return ['getWorldTemplateBody', '/getWorldTemplateBody', 'POST'] as const
}

export function usePostGetWorldTemplateBody<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getWorldTemplateBody.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getWorldTemplateBody.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetWorldTemplateBodyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getWorldTemplateBody.$post> },
      ) => parseResponse(client.getWorldTemplateBody.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListDeploymentJobsKey() {
  return ['listDeploymentJobs', '/listDeploymentJobs', 'POST'] as const
}

export function usePostListDeploymentJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listDeploymentJobs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listDeploymentJobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListDeploymentJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listDeploymentJobs.$post> }) =>
        parseResponse(client.listDeploymentJobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListFleetsKey() {
  return ['listFleets', '/listFleets', 'POST'] as const
}

export function usePostListFleets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listFleets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.listFleets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListFleetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listFleets.$post> }) =>
        parseResponse(client.listFleets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListRobotApplicationsKey() {
  return ['listRobotApplications', '/listRobotApplications', 'POST'] as const
}

export function usePostListRobotApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listRobotApplications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listRobotApplications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListRobotApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listRobotApplications.$post> },
      ) => parseResponse(client.listRobotApplications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListRobotsKey() {
  return ['listRobots', '/listRobots', 'POST'] as const
}

export function usePostListRobots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listRobots.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.listRobots.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListRobotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listRobots.$post> }) =>
        parseResponse(client.listRobots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListSimulationApplicationsKey() {
  return ['listSimulationApplications', '/listSimulationApplications', 'POST'] as const
}

export function usePostListSimulationApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listSimulationApplications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listSimulationApplications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListSimulationApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listSimulationApplications.$post> },
      ) => parseResponse(client.listSimulationApplications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListSimulationJobBatchesKey() {
  return ['listSimulationJobBatches', '/listSimulationJobBatches', 'POST'] as const
}

export function usePostListSimulationJobBatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listSimulationJobBatches.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listSimulationJobBatches.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListSimulationJobBatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listSimulationJobBatches.$post> },
      ) => parseResponse(client.listSimulationJobBatches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListSimulationJobsKey() {
  return ['listSimulationJobs', '/listSimulationJobs', 'POST'] as const
}

export function usePostListSimulationJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listSimulationJobs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listSimulationJobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListSimulationJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listSimulationJobs.$post> }) =>
        parseResponse(client.listSimulationJobs.$post(arg, clientOptions)),
      restMutationOptions,
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

export function getPostListWorldExportJobsKey() {
  return ['listWorldExportJobs', '/listWorldExportJobs', 'POST'] as const
}

export function usePostListWorldExportJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listWorldExportJobs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listWorldExportJobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListWorldExportJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listWorldExportJobs.$post> }) =>
        parseResponse(client.listWorldExportJobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListWorldGenerationJobsKey() {
  return ['listWorldGenerationJobs', '/listWorldGenerationJobs', 'POST'] as const
}

export function usePostListWorldGenerationJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listWorldGenerationJobs.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listWorldGenerationJobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListWorldGenerationJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listWorldGenerationJobs.$post> },
      ) => parseResponse(client.listWorldGenerationJobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListWorldTemplatesKey() {
  return ['listWorldTemplates', '/listWorldTemplates', 'POST'] as const
}

export function usePostListWorldTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listWorldTemplates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listWorldTemplates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListWorldTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listWorldTemplates.$post> }) =>
        parseResponse(client.listWorldTemplates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListWorldsKey() {
  return ['listWorlds', '/listWorlds', 'POST'] as const
}

export function usePostListWorlds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listWorlds.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.listWorlds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListWorldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listWorlds.$post> }) =>
        parseResponse(client.listWorlds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegisterRobotKey() {
  return ['registerRobot', '/registerRobot', 'POST'] as const
}

export function usePostRegisterRobot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registerRobot.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.registerRobot.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegisterRobotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.registerRobot.$post> }) =>
        parseResponse(client.registerRobot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestartSimulationJobKey() {
  return ['restartSimulationJob', '/restartSimulationJob', 'POST'] as const
}

export function usePostRestartSimulationJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.restartSimulationJob.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.restartSimulationJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestartSimulationJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.restartSimulationJob.$post> },
      ) => parseResponse(client.restartSimulationJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartSimulationJobBatchKey() {
  return ['startSimulationJobBatch', '/startSimulationJobBatch', 'POST'] as const
}

export function usePostStartSimulationJobBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.startSimulationJobBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.startSimulationJobBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartSimulationJobBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.startSimulationJobBatch.$post> },
      ) => parseResponse(client.startSimulationJobBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncDeploymentJobKey() {
  return ['syncDeploymentJob', '/syncDeploymentJob', 'POST'] as const
}

export function usePostSyncDeploymentJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.syncDeploymentJob.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.syncDeploymentJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncDeploymentJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.syncDeploymentJob.$post> }) =>
        parseResponse(client.syncDeploymentJob.$post(arg, clientOptions)),
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

export function getPostUpdateRobotApplicationKey() {
  return ['updateRobotApplication', '/updateRobotApplication', 'POST'] as const
}

export function usePostUpdateRobotApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateRobotApplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateRobotApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateRobotApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateRobotApplication.$post> },
      ) => parseResponse(client.updateRobotApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateSimulationApplicationKey() {
  return ['updateSimulationApplication', '/updateSimulationApplication', 'POST'] as const
}

export function usePostUpdateSimulationApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateSimulationApplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateSimulationApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateSimulationApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateSimulationApplication.$post> },
      ) => parseResponse(client.updateSimulationApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateWorldTemplateKey() {
  return ['updateWorldTemplate', '/updateWorldTemplate', 'POST'] as const
}

export function usePostUpdateWorldTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateWorldTemplate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateWorldTemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateWorldTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.updateWorldTemplate.$post> }) =>
        parseResponse(client.updateWorldTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
