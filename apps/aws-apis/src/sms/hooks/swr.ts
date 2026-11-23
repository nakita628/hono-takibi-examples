import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24CreateAppKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24CreateReplicationJobKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24DeleteAppKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24DeleteAppLaunchConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration',
  ] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24DeleteAppReplicationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration',
  ] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24DeleteAppValidationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration',
  ] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24DeleteReplicationJobKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24DeleteServerCatalogKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24DisassociateConnectorKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GenerateChangeSetKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GenerateTemplateKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GetAppKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GetAppLaunchConfigurationKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GetAppReplicationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration',
  ] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GetAppValidationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration',
  ] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GetAppValidationOutputKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GetConnectorsKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GetReplicationJobsKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GetReplicationRunsKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24GetServersKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24ImportAppCatalogKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24ImportServerCatalogKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24LaunchAppKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24ListAppsKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24NotifyAppValidationOutputKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24PutAppLaunchConfigurationKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24PutAppReplicationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration',
  ] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24PutAppValidationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration',
  ] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24StartAppReplicationKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24StartOnDemandAppReplicationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication',
  ] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24StartOnDemandReplicationRunKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun',
  ] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24StopAppReplicationKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24TerminateAppKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24UpdateAppKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp'] as const
}

export function getXAmzTargetAWSServerMigrationServiceV2016_10_24UpdateReplicationJobKey() {
  return ['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob'] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024CreateAppKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024CreateApp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024CreateAppKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJobKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJobKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteApp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJobKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJobKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalogKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalog<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalogKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnectorKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnector<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnectorKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSetKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSetKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplateKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplateKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetApp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutputKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutput<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutputKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetConnectorsKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetConnectors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024GetConnectorsKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobsKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobsKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRunsKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRuns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRunsKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetServersKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetServers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024GetServersKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalogKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalog<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalogKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalogKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalog<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalogKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024LaunchAppKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024LaunchApp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024LaunchAppKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024ListAppsKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024ListApps<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024ListAppsKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutputKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutput<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutputKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfigurationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StartAppReplicationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024StartAppReplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024StartAppReplicationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplicationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplicationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRunKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRun<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRunKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StopAppReplicationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024StopAppReplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024StopAppReplicationKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024TerminateAppKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024TerminateApp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024TerminateAppKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateAppKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024UpdateApp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateAppKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateReplicationJobKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024UpdateReplicationJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateReplicationJobKey()
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
            (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
