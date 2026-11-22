import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006BatchGetApplicationRevisions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006BatchGetApplicationRevisionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetApplicationsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006BatchGetApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006BatchGetApplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006BatchGetApplicationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006BatchGetDeploymentGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentGroupsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006BatchGetDeploymentInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentInstancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006BatchGetDeploymentTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentTargetsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006BatchGetDeployments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006BatchGetDeploymentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006BatchGetOnPremisesInstancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ContinueDeploymentMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment',
    '/#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ContinueDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ContinueDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ContinueDeployment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006ContinueDeploymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006CreateApplicationMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.CreateApplication',
    '/#X-Amz-Target=CodeDeploy_20141006.CreateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006CreateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006CreateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.CreateApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006CreateApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006CreateApplicationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006CreateDeploymentMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.CreateDeployment',
    '/#X-Amz-Target=CodeDeploy_20141006.CreateDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006CreateDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006CreateDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006CreateDeployment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeployment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006CreateDeploymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006CreateDeploymentConfigMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig',
    '/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006CreateDeploymentConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006CreateDeploymentConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006CreateDeploymentConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006CreateDeploymentConfigMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006CreateDeploymentGroupMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup',
    '/#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006CreateDeploymentGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006CreateDeploymentGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006CreateDeploymentGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006CreateDeploymentGroupMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006DeleteApplicationMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeleteApplication',
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006DeleteApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006DeleteApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006DeleteApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006DeleteApplicationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006DeleteDeploymentConfigMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig',
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006DeleteDeploymentConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006DeleteDeploymentConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006DeleteDeploymentConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006DeleteDeploymentConfigMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006DeleteDeploymentGroupMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup',
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006DeleteDeploymentGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006DeleteDeploymentGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006DeleteDeploymentGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006DeleteDeploymentGroupMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken',
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006DeleteGitHubAccountToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006DeleteGitHubAccountTokenMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId',
    '/#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006DeleteResourcesByExternalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006DeleteResourcesByExternalIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance',
    '/#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006DeregisterOnPremisesInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006GetApplicationMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetApplication',
    '/#X-Amz-Target=CodeDeploy_20141006.GetApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006GetApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplication']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006GetApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.GetApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006GetApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplication']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006GetApplicationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006GetApplicationRevisionMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision',
    '/#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006GetApplicationRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006GetApplicationRevisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006GetApplicationRevision<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006GetApplicationRevisionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetDeployment',
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeployment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006GetDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeployment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.GetDeployment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006GetDeployment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeployment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeployment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006GetDeploymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentConfigMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig',
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006GetDeploymentConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006GetDeploymentConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006GetDeploymentConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentGroupMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup',
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006GetDeploymentGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006GetDeploymentGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006GetDeploymentGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentInstanceMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance',
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006GetDeploymentInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006GetDeploymentInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006GetDeploymentInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentTargetMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget',
    '/#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006GetDeploymentTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006GetDeploymentTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006GetDeploymentTarget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006GetDeploymentTargetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006GetOnPremisesInstanceMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance',
    '/#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006GetOnPremisesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006GetOnPremisesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006GetOnPremisesInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006GetOnPremisesInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ListApplicationRevisionsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions',
    '/#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ListApplicationRevisionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ListApplicationRevisionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ListApplicationRevisions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006ListApplicationRevisionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ListApplicationsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListApplications',
    '/#X-Amz-Target=CodeDeploy_20141006.ListApplications',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ListApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ListApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplications']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ListApplications'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ListApplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListApplications']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006ListApplicationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentConfigsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs',
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ListDeploymentConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ListDeploymentConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006ListDeploymentConfigsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentGroupsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups',
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ListDeploymentGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ListDeploymentGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006ListDeploymentGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentInstancesMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ListDeploymentInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ListDeploymentInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006ListDeploymentInstancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentTargetsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets',
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ListDeploymentTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ListDeploymentTargets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006ListDeploymentTargetsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentsMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListDeployments',
    '/#X-Amz-Target=CodeDeploy_20141006.ListDeployments',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ListDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ListDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeployments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ListDeployments'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ListDeployments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListDeployments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006ListDeploymentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames',
    '/#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNames<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006ListGitHubAccountTokenNamesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ListOnPremisesInstancesMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ListOnPremisesInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ListOnPremisesInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ListOnPremisesInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006ListOnPremisesInstancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource',
    '/#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006ListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus',
    '/#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006PutLifecycleEventHookExecutionStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006RegisterApplicationRevisionMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision',
    '/#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006RegisterApplicationRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006RegisterApplicationRevisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006RegisterApplicationRevision<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006RegisterApplicationRevisionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance',
    '/#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006RegisterOnPremisesInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances',
    '/#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination',
    '/#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTermination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006SkipWaitTimeForInstanceTerminationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006StopDeploymentMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.StopDeployment',
    '/#X-Amz-Target=CodeDeploy_20141006.StopDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006StopDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.StopDeployment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006StopDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.StopDeployment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.StopDeployment'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006StopDeployment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CodeDeploy_20141006.StopDeployment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.StopDeployment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006StopDeploymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006TagResourceMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.TagResource',
    '/#X-Amz-Target=CodeDeploy_20141006.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.TagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CodeDeploy_20141006.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006TagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.UntagResource',
    '/#X-Amz-Target=CodeDeploy_20141006.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeDeploy_20141006.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.UntagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006UntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006UpdateApplicationMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.UpdateApplication',
    '/#X-Amz-Target=CodeDeploy_20141006.UpdateApplication',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006UpdateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006UpdateApplicationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006UpdateApplication<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateApplication']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodeDeploy20141006UpdateApplicationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetCodeDeploy20141006UpdateDeploymentGroupMutationKey() {
  return [
    '#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup',
    '/#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeDeploy20141006UpdateDeploymentGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeDeploy20141006UpdateDeploymentGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeDeploy20141006UpdateDeploymentGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetCodeDeploy20141006UpdateDeploymentGroupMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
