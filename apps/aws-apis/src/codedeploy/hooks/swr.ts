import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetCodeDeploy_20141006AddTagsToOnPremisesInstancesKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances'] as const
}

export function getXAmzTargetCodeDeploy_20141006BatchGetApplicationRevisionsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions'] as const
}

export function getXAmzTargetCodeDeploy_20141006BatchGetApplicationsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications'] as const
}

export function getXAmzTargetCodeDeploy_20141006BatchGetDeploymentGroupsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups'] as const
}

export function getXAmzTargetCodeDeploy_20141006BatchGetDeploymentInstancesKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances'] as const
}

export function getXAmzTargetCodeDeploy_20141006BatchGetDeploymentTargetsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets'] as const
}

export function getXAmzTargetCodeDeploy_20141006BatchGetDeploymentsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments'] as const
}

export function getXAmzTargetCodeDeploy_20141006BatchGetOnPremisesInstancesKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances'] as const
}

export function getXAmzTargetCodeDeploy_20141006ContinueDeploymentKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment'] as const
}

export function getXAmzTargetCodeDeploy_20141006CreateApplicationKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.CreateApplication'] as const
}

export function getXAmzTargetCodeDeploy_20141006CreateDeploymentKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment'] as const
}

export function getXAmzTargetCodeDeploy_20141006CreateDeploymentConfigKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig'] as const
}

export function getXAmzTargetCodeDeploy_20141006CreateDeploymentGroupKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup'] as const
}

export function getXAmzTargetCodeDeploy_20141006DeleteApplicationKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication'] as const
}

export function getXAmzTargetCodeDeploy_20141006DeleteDeploymentConfigKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig'] as const
}

export function getXAmzTargetCodeDeploy_20141006DeleteDeploymentGroupKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup'] as const
}

export function getXAmzTargetCodeDeploy_20141006DeleteGitHubAccountTokenKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken'] as const
}

export function getXAmzTargetCodeDeploy_20141006DeleteResourcesByExternalIdKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId'] as const
}

export function getXAmzTargetCodeDeploy_20141006DeregisterOnPremisesInstanceKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance'] as const
}

export function getXAmzTargetCodeDeploy_20141006GetApplicationKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.GetApplication'] as const
}

export function getXAmzTargetCodeDeploy_20141006GetApplicationRevisionKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision'] as const
}

export function getXAmzTargetCodeDeploy_20141006GetDeploymentKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.GetDeployment'] as const
}

export function getXAmzTargetCodeDeploy_20141006GetDeploymentConfigKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig'] as const
}

export function getXAmzTargetCodeDeploy_20141006GetDeploymentGroupKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup'] as const
}

export function getXAmzTargetCodeDeploy_20141006GetDeploymentInstanceKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance'] as const
}

export function getXAmzTargetCodeDeploy_20141006GetDeploymentTargetKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget'] as const
}

export function getXAmzTargetCodeDeploy_20141006GetOnPremisesInstanceKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance'] as const
}

export function getXAmzTargetCodeDeploy_20141006ListApplicationRevisionsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions'] as const
}

export function getXAmzTargetCodeDeploy_20141006ListApplicationsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ListApplications'] as const
}

export function getXAmzTargetCodeDeploy_20141006ListDeploymentConfigsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs'] as const
}

export function getXAmzTargetCodeDeploy_20141006ListDeploymentGroupsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups'] as const
}

export function getXAmzTargetCodeDeploy_20141006ListDeploymentInstancesKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances'] as const
}

export function getXAmzTargetCodeDeploy_20141006ListDeploymentTargetsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets'] as const
}

export function getXAmzTargetCodeDeploy_20141006ListDeploymentsKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ListDeployments'] as const
}

export function getXAmzTargetCodeDeploy_20141006ListGitHubAccountTokenNamesKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames'] as const
}

export function getXAmzTargetCodeDeploy_20141006ListOnPremisesInstancesKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances'] as const
}

export function getXAmzTargetCodeDeploy_20141006ListTagsForResourceKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource'] as const
}

export function getXAmzTargetCodeDeploy_20141006PutLifecycleEventHookExecutionStatusKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'] as const
}

export function getXAmzTargetCodeDeploy_20141006RegisterApplicationRevisionKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision'] as const
}

export function getXAmzTargetCodeDeploy_20141006RegisterOnPremisesInstanceKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance'] as const
}

export function getXAmzTargetCodeDeploy_20141006RemoveTagsFromOnPremisesInstancesKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'] as const
}

export function getXAmzTargetCodeDeploy_20141006SkipWaitTimeForInstanceTerminationKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'] as const
}

export function getXAmzTargetCodeDeploy_20141006StopDeploymentKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.StopDeployment'] as const
}

export function getXAmzTargetCodeDeploy_20141006TagResourceKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.TagResource'] as const
}

export function getXAmzTargetCodeDeploy_20141006UntagResourceKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.UntagResource'] as const
}

export function getXAmzTargetCodeDeploy_20141006UpdateApplicationKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication'] as const
}

export function getXAmzTargetCodeDeploy_20141006UpdateDeploymentGroupKey() {
  return ['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup'] as const
}

export function getPostXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006BatchGetApplicationRevisions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetApplicationsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006BatchGetApplications<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006BatchGetApplicationsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006BatchGetDeploymentGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006BatchGetDeploymentInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006BatchGetDeploymentTargets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006BatchGetDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ContinueDeploymentKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment',
    '/#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ContinueDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ContinueDeploymentKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006CreateApplicationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.CreateApplication',
    '/#X-Amz-Target=CodeDeploy_20141006.CreateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006CreateApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006CreateApplicationKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.CreateApplication'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006CreateDeploymentKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.CreateDeployment',
    '/#X-Amz-Target=CodeDeploy_20141006.CreateDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006CreateDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006CreateDeploymentKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006CreateDeploymentConfigKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig',
    '/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006CreateDeploymentConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006CreateDeploymentConfigKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006CreateDeploymentGroupKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup',
    '/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006CreateDeploymentGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006CreateDeploymentGroupKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006DeleteApplicationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeleteApplication',
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006DeleteApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006DeleteApplicationKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006DeleteDeploymentConfigKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig',
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006DeleteDeploymentConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006DeleteDeploymentConfigKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006DeleteDeploymentGroupKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup',
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006DeleteDeploymentGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006DeleteDeploymentGroupKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken',
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006DeleteGitHubAccountToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId',
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006DeleteResourcesByExternalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance',
    '/#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006GetApplicationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetApplication',
    '/#X-Amz-Target=CodeDeploy_20141006.GetApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006GetApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplication']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplication']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006GetApplicationKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.GetApplication'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006GetApplicationRevisionKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision',
    '/#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006GetApplicationRevision<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006GetApplicationRevisionKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetDeployment',
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006GetDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeployment']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeployment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006GetDeploymentKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeployment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.GetDeployment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentConfigKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig',
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006GetDeploymentConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006GetDeploymentConfigKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentGroupKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup',
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006GetDeploymentGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006GetDeploymentGroupKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentInstanceKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance',
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006GetDeploymentInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006GetDeploymentInstanceKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentTargetKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget',
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006GetDeploymentTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006GetDeploymentTargetKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006GetOnPremisesInstanceKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance',
    '/#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006GetOnPremisesInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006GetOnPremisesInstanceKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ListApplicationRevisionsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions',
    '/#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ListApplicationRevisions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ListApplicationRevisionsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ListApplicationsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListApplications',
    '/#X-Amz-Target=CodeDeploy_20141006.ListApplications',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ListApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplications']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ListApplicationsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ListApplications'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentConfigsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs',
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ListDeploymentConfigs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ListDeploymentConfigsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentGroupsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups',
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ListDeploymentGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ListDeploymentGroupsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentInstancesKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ListDeploymentInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ListDeploymentInstancesKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentTargetsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets',
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ListDeploymentTargets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ListDeploymentTargetsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentsKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListDeployments',
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeployments',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ListDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeployments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ListDeploymentsKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeployments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ListDeployments'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames',
    '/#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNames<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ListOnPremisesInstancesKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ListOnPremisesInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ListOnPremisesInstancesKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource',
    '/#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus',
    '/#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006RegisterApplicationRevisionKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision',
    '/#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006RegisterApplicationRevision<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006RegisterApplicationRevisionKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance',
    '/#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006RegisterOnPremisesInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination',
    '/#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTermination<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006StopDeploymentKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.StopDeployment',
    '/#X-Amz-Target=CodeDeploy_20141006.StopDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006StopDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.StopDeployment']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.StopDeployment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006StopDeploymentKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.StopDeployment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.StopDeployment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006TagResourceKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.TagResource',
    '/#X-Amz-Target=CodeDeploy_20141006.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006TagResourceKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006UntagResourceKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.UntagResource',
    '/#X-Amz-Target=CodeDeploy_20141006.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006UpdateApplicationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.UpdateApplication',
    '/#X-Amz-Target=CodeDeploy_20141006.UpdateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006UpdateApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006UpdateApplicationKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeDeploy20141006UpdateDeploymentGroupKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup',
    '/#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeDeploy20141006UpdateDeploymentGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeDeploy20141006UpdateDeploymentGroupKey()
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
            (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
