import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024CreateAppMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024CreateAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024CreateAppMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024CreateApp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024CreateAppMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJobMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJobMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteApp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJobMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJobMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalogMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalog<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalogMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnectorMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnector<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnectorMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSetMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSetMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplateMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplateMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetApp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutputMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutputMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutput<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutputMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetConnectorsMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024GetConnectorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetConnectors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024GetConnectorsMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobsMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobsMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRunsMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRuns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRunsMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetServersMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024GetServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024GetServersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024GetServers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024GetServersMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalogMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalog<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalogMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalogMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalog<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalogMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024LaunchAppMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024LaunchAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024LaunchAppMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024LaunchApp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024LaunchAppMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024ListAppsMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024ListAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024ListAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024ListApps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024ListAppsMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutputMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutputMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutputMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutput<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutputMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfigurationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StartAppReplicationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StartAppReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024StartAppReplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024StartAppReplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024StartAppReplicationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplicationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplicationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRunMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRunMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StopAppReplicationMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024StopAppReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024StopAppReplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024StopAppReplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024StopAppReplicationMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024TerminateAppMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024TerminateAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024TerminateAppMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024TerminateApp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024TerminateAppMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateAppMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateAppMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateAppMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024UpdateApp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateAppMutationOptions<
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

export function getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateReplicationJobMutationKey() {
  return [
    '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob',
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateReplicationJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateReplicationJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSServerMigrationServiceV20161024UpdateReplicationJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSServerMigrationServiceV20161024UpdateReplicationJobMutationOptions<
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
