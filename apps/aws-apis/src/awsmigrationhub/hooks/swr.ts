import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSMigrationHubAssociateCreatedArtifactKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact',
    '/#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubAssociateCreatedArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubAssociateCreatedArtifactKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubAssociateDiscoveredResourceKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource',
    '/#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubAssociateDiscoveredResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubAssociateDiscoveredResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubCreateProgressUpdateStreamKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream',
    '/#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubCreateProgressUpdateStream<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubCreateProgressUpdateStreamKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream',
    '/#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubDeleteProgressUpdateStream<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubDescribeApplicationStateKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.DescribeApplicationState',
    '/#X-Amz-Target=AWSMigrationHub.DescribeApplicationState',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubDescribeApplicationState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubDescribeApplicationStateKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.DescribeApplicationState'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubDescribeMigrationTaskKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask',
    '/#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubDescribeMigrationTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubDescribeMigrationTaskKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubDisassociateCreatedArtifactKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact',
    '/#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubDisassociateCreatedArtifact<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubDisassociateCreatedArtifactKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource',
    '/#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubDisassociateDiscoveredResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubImportMigrationTaskKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ImportMigrationTask',
    '/#X-Amz-Target=AWSMigrationHub.ImportMigrationTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubImportMigrationTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubImportMigrationTaskKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.ImportMigrationTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubListApplicationStatesKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ListApplicationStates',
    '/#X-Amz-Target=AWSMigrationHub.ListApplicationStates',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubListApplicationStates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.ListApplicationStates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubListApplicationStatesKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.ListApplicationStates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.ListApplicationStates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubListCreatedArtifactsKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts',
    '/#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubListCreatedArtifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubListCreatedArtifactsKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubListDiscoveredResourcesKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources',
    '/#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubListDiscoveredResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubListDiscoveredResourcesKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubListMigrationTasksKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ListMigrationTasks',
    '/#X-Amz-Target=AWSMigrationHub.ListMigrationTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubListMigrationTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubListMigrationTasksKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.ListMigrationTasks'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubListProgressUpdateStreamsKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams',
    '/#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubListProgressUpdateStreams<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubListProgressUpdateStreamsKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubNotifyApplicationStateKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.NotifyApplicationState',
    '/#X-Amz-Target=AWSMigrationHub.NotifyApplicationState',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubNotifyApplicationState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubNotifyApplicationStateKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.NotifyApplicationState'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubNotifyMigrationTaskStateKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState',
    '/#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubNotifyMigrationTaskState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubNotifyMigrationTaskStateKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSMigrationHubPutResourceAttributesKey() {
  return [
    '#X-Amz-Target=AWSMigrationHub.PutResourceAttributes',
    '/#X-Amz-Target=AWSMigrationHub.PutResourceAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSMigrationHubPutResourceAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSMigrationHubPutResourceAttributesKey()
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
            (typeof client)['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSMigrationHub.PutResourceAttributes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
