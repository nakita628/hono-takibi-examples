import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSMigrationHubAssociateCreatedArtifactKey() {
  return ['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact'] as const
}

export function getXAmzTargetAWSMigrationHubAssociateDiscoveredResourceKey() {
  return ['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource'] as const
}

export function getXAmzTargetAWSMigrationHubCreateProgressUpdateStreamKey() {
  return ['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream'] as const
}

export function getXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamKey() {
  return ['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream'] as const
}

export function getXAmzTargetAWSMigrationHubDescribeApplicationStateKey() {
  return ['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState'] as const
}

export function getXAmzTargetAWSMigrationHubDescribeMigrationTaskKey() {
  return ['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask'] as const
}

export function getXAmzTargetAWSMigrationHubDisassociateCreatedArtifactKey() {
  return ['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact'] as const
}

export function getXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceKey() {
  return ['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource'] as const
}

export function getXAmzTargetAWSMigrationHubImportMigrationTaskKey() {
  return ['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask'] as const
}

export function getXAmzTargetAWSMigrationHubListApplicationStatesKey() {
  return ['#X-Amz-Target=AWSMigrationHub.ListApplicationStates'] as const
}

export function getXAmzTargetAWSMigrationHubListCreatedArtifactsKey() {
  return ['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts'] as const
}

export function getXAmzTargetAWSMigrationHubListDiscoveredResourcesKey() {
  return ['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources'] as const
}

export function getXAmzTargetAWSMigrationHubListMigrationTasksKey() {
  return ['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks'] as const
}

export function getXAmzTargetAWSMigrationHubListProgressUpdateStreamsKey() {
  return ['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams'] as const
}

export function getXAmzTargetAWSMigrationHubNotifyApplicationStateKey() {
  return ['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState'] as const
}

export function getXAmzTargetAWSMigrationHubNotifyMigrationTaskStateKey() {
  return ['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState'] as const
}

export function getXAmzTargetAWSMigrationHubPutResourceAttributesKey() {
  return ['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes'] as const
}

export function getPostXAmzTargetAWSMigrationHubAssociateCreatedArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact',
    '/#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubAssociateCreatedArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubAssociateCreatedArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubAssociateCreatedArtifact<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubAssociateCreatedArtifactMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubAssociateDiscoveredResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource',
    '/#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubAssociateDiscoveredResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubAssociateDiscoveredResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubAssociateDiscoveredResource<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource']['$post']
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
    getPostXAmzTargetAWSMigrationHubAssociateDiscoveredResourceMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubCreateProgressUpdateStreamMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream',
    '/#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubCreateProgressUpdateStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubCreateProgressUpdateStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubCreateProgressUpdateStream<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream']['$post']
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
    getPostXAmzTargetAWSMigrationHubCreateProgressUpdateStreamMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream',
    '/#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubDeleteProgressUpdateStream<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream']['$post']
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
    getPostXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubDescribeApplicationStateMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.DescribeApplicationState',
    '/#X-Amz-Target=AWSMigrationHub.DescribeApplicationState',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubDescribeApplicationStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubDescribeApplicationStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubDescribeApplicationState<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubDescribeApplicationStateMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubDescribeMigrationTaskMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask',
    '/#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubDescribeMigrationTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubDescribeMigrationTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubDescribeMigrationTask<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubDescribeMigrationTaskMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubDisassociateCreatedArtifactMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact',
    '/#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubDisassociateCreatedArtifactMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubDisassociateCreatedArtifactMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubDisassociateCreatedArtifact<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact']['$post']
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
    getPostXAmzTargetAWSMigrationHubDisassociateCreatedArtifactMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource',
    '/#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubDisassociateDiscoveredResource<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource']['$post']
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
    getPostXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubImportMigrationTaskMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ImportMigrationTask',
    '/#X-Amz-Target=AWSMigrationHub.ImportMigrationTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubImportMigrationTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubImportMigrationTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubImportMigrationTask<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubImportMigrationTaskMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubListApplicationStatesMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ListApplicationStates',
    '/#X-Amz-Target=AWSMigrationHub.ListApplicationStates',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubListApplicationStatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.ListApplicationStates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.ListApplicationStates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubListApplicationStatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.ListApplicationStates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.ListApplicationStates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubListApplicationStates<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.ListApplicationStates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.ListApplicationStates']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubListApplicationStatesMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubListCreatedArtifactsMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts',
    '/#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubListCreatedArtifactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubListCreatedArtifactsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubListCreatedArtifacts<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubListCreatedArtifactsMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubListDiscoveredResourcesMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources',
    '/#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubListDiscoveredResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubListDiscoveredResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubListDiscoveredResources<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubListDiscoveredResourcesMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubListMigrationTasksMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ListMigrationTasks',
    '/#X-Amz-Target=AWSMigrationHub.ListMigrationTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubListMigrationTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubListMigrationTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubListMigrationTasks<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubListMigrationTasksMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubListProgressUpdateStreamsMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams',
    '/#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubListProgressUpdateStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubListProgressUpdateStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubListProgressUpdateStreams<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubListProgressUpdateStreamsMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubNotifyApplicationStateMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.NotifyApplicationState',
    '/#X-Amz-Target=AWSMigrationHub.NotifyApplicationState',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubNotifyApplicationStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubNotifyApplicationStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubNotifyApplicationState<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubNotifyApplicationStateMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubNotifyMigrationTaskStateMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState',
    '/#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubNotifyMigrationTaskStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubNotifyMigrationTaskStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubNotifyMigrationTaskState<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubNotifyMigrationTaskStateMutationOptions<
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

export function getPostXAmzTargetAWSMigrationHubPutResourceAttributesMutationKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.PutResourceAttributes',
    '/#X-Amz-Target=AWSMigrationHub.PutResourceAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSMigrationHubPutResourceAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSMigrationHubPutResourceAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSMigrationHubPutResourceAttributes<
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
                  (typeof client)['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSMigrationHubPutResourceAttributesMutationOptions<
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
