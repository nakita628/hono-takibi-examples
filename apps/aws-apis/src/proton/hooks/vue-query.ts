import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionKey() {
  return ['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection'] as const
}

export function getXAmzTargetAwsProton20200720CancelComponentDeploymentKey() {
  return ['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment'] as const
}

export function getXAmzTargetAwsProton20200720CancelEnvironmentDeploymentKey() {
  return ['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment'] as const
}

export function getXAmzTargetAwsProton20200720CancelServiceInstanceDeploymentKey() {
  return ['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment'] as const
}

export function getXAmzTargetAwsProton20200720CancelServicePipelineDeploymentKey() {
  return ['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment'] as const
}

export function getXAmzTargetAwsProton20200720CreateComponentKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateComponent'] as const
}

export function getXAmzTargetAwsProton20200720CreateEnvironmentKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateEnvironment'] as const
}

export function getXAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection'] as const
}

export function getXAmzTargetAwsProton20200720CreateEnvironmentTemplateKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate'] as const
}

export function getXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion'] as const
}

export function getXAmzTargetAwsProton20200720CreateRepositoryKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateRepository'] as const
}

export function getXAmzTargetAwsProton20200720CreateServiceKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateService'] as const
}

export function getXAmzTargetAwsProton20200720CreateServiceInstanceKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateServiceInstance'] as const
}

export function getXAmzTargetAwsProton20200720CreateServiceSyncConfigKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig'] as const
}

export function getXAmzTargetAwsProton20200720CreateServiceTemplateKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate'] as const
}

export function getXAmzTargetAwsProton20200720CreateServiceTemplateVersionKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion'] as const
}

export function getXAmzTargetAwsProton20200720CreateTemplateSyncConfigKey() {
  return ['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig'] as const
}

export function getXAmzTargetAwsProton20200720DeleteComponentKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteComponent'] as const
}

export function getXAmzTargetAwsProton20200720DeleteEnvironmentKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteEnvironment'] as const
}

export function getXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection'] as const
}

export function getXAmzTargetAwsProton20200720DeleteEnvironmentTemplateKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate'] as const
}

export function getXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion'] as const
}

export function getXAmzTargetAwsProton20200720DeleteRepositoryKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteRepository'] as const
}

export function getXAmzTargetAwsProton20200720DeleteServiceKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteService'] as const
}

export function getXAmzTargetAwsProton20200720DeleteServiceSyncConfigKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig'] as const
}

export function getXAmzTargetAwsProton20200720DeleteServiceTemplateKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate'] as const
}

export function getXAmzTargetAwsProton20200720DeleteServiceTemplateVersionKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion'] as const
}

export function getXAmzTargetAwsProton20200720DeleteTemplateSyncConfigKey() {
  return ['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig'] as const
}

export function getXAmzTargetAwsProton20200720GetAccountSettingsKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetAccountSettings'] as const
}

export function getXAmzTargetAwsProton20200720GetComponentKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetComponent'] as const
}

export function getXAmzTargetAwsProton20200720GetEnvironmentKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetEnvironment'] as const
}

export function getXAmzTargetAwsProton20200720GetEnvironmentAccountConnectionKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection'] as const
}

export function getXAmzTargetAwsProton20200720GetEnvironmentTemplateKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate'] as const
}

export function getXAmzTargetAwsProton20200720GetEnvironmentTemplateVersionKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion'] as const
}

export function getXAmzTargetAwsProton20200720GetRepositoryKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetRepository'] as const
}

export function getXAmzTargetAwsProton20200720GetRepositorySyncStatusKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus'] as const
}

export function getXAmzTargetAwsProton20200720GetResourcesSummaryKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetResourcesSummary'] as const
}

export function getXAmzTargetAwsProton20200720GetServiceKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetService'] as const
}

export function getXAmzTargetAwsProton20200720GetServiceInstanceKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetServiceInstance'] as const
}

export function getXAmzTargetAwsProton20200720GetServiceInstanceSyncStatusKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus'] as const
}

export function getXAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary'] as const
}

export function getXAmzTargetAwsProton20200720GetServiceSyncConfigKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig'] as const
}

export function getXAmzTargetAwsProton20200720GetServiceTemplateKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetServiceTemplate'] as const
}

export function getXAmzTargetAwsProton20200720GetServiceTemplateVersionKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion'] as const
}

export function getXAmzTargetAwsProton20200720GetTemplateSyncConfigKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig'] as const
}

export function getXAmzTargetAwsProton20200720GetTemplateSyncStatusKey() {
  return ['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus'] as const
}

export function getXAmzTargetAwsProton20200720ListComponentOutputsKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListComponentOutputs'] as const
}

export function getXAmzTargetAwsProton20200720ListComponentProvisionedResourcesKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources'] as const
}

export function getXAmzTargetAwsProton20200720ListComponentsKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListComponents'] as const
}

export function getXAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections'] as const
}

export function getXAmzTargetAwsProton20200720ListEnvironmentOutputsKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs'] as const
}

export function getXAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources'] as const
}

export function getXAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions'] as const
}

export function getXAmzTargetAwsProton20200720ListEnvironmentTemplatesKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates'] as const
}

export function getXAmzTargetAwsProton20200720ListEnvironmentsKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListEnvironments'] as const
}

export function getXAmzTargetAwsProton20200720ListRepositoriesKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListRepositories'] as const
}

export function getXAmzTargetAwsProton20200720ListRepositorySyncDefinitionsKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions'] as const
}

export function getXAmzTargetAwsProton20200720ListServiceInstanceOutputsKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs'] as const
}

export function getXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources'] as const
}

export function getXAmzTargetAwsProton20200720ListServiceInstancesKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListServiceInstances'] as const
}

export function getXAmzTargetAwsProton20200720ListServicePipelineOutputsKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs'] as const
}

export function getXAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources'] as const
}

export function getXAmzTargetAwsProton20200720ListServiceTemplateVersionsKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions'] as const
}

export function getXAmzTargetAwsProton20200720ListServiceTemplatesKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListServiceTemplates'] as const
}

export function getXAmzTargetAwsProton20200720ListServicesKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListServices'] as const
}

export function getXAmzTargetAwsProton20200720ListTagsForResourceKey() {
  return ['#X-Amz-Target=AwsProton20200720.ListTagsForResource'] as const
}

export function getXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeKey() {
  return ['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange'] as const
}

export function getXAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionKey() {
  return ['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection'] as const
}

export function getXAmzTargetAwsProton20200720TagResourceKey() {
  return ['#X-Amz-Target=AwsProton20200720.TagResource'] as const
}

export function getXAmzTargetAwsProton20200720UntagResourceKey() {
  return ['#X-Amz-Target=AwsProton20200720.UntagResource'] as const
}

export function getXAmzTargetAwsProton20200720UpdateAccountSettingsKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings'] as const
}

export function getXAmzTargetAwsProton20200720UpdateComponentKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateComponent'] as const
}

export function getXAmzTargetAwsProton20200720UpdateEnvironmentKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateEnvironment'] as const
}

export function getXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection'] as const
}

export function getXAmzTargetAwsProton20200720UpdateEnvironmentTemplateKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate'] as const
}

export function getXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion'] as const
}

export function getXAmzTargetAwsProton20200720UpdateServiceKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateService'] as const
}

export function getXAmzTargetAwsProton20200720UpdateServiceInstanceKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance'] as const
}

export function getXAmzTargetAwsProton20200720UpdateServicePipelineKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline'] as const
}

export function getXAmzTargetAwsProton20200720UpdateServiceSyncBlockerKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker'] as const
}

export function getXAmzTargetAwsProton20200720UpdateServiceSyncConfigKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig'] as const
}

export function getXAmzTargetAwsProton20200720UpdateServiceTemplateKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate'] as const
}

export function getXAmzTargetAwsProton20200720UpdateServiceTemplateVersionKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion'] as const
}

export function getXAmzTargetAwsProton20200720UpdateTemplateSyncConfigKey() {
  return ['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig'] as const
}

export function getPostXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnection<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection']['$post']
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
    getPostXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CancelComponentDeploymentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CancelComponentDeployment',
    '/#X-Amz-Target=AwsProton20200720.CancelComponentDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CancelComponentDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CancelComponentDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CancelComponentDeployment<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment']['$post']
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
    getPostXAmzTargetAwsProton20200720CancelComponentDeploymentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CancelEnvironmentDeploymentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment',
    '/#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CancelEnvironmentDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CancelEnvironmentDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CancelEnvironmentDeployment<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment']['$post']
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
    getPostXAmzTargetAwsProton20200720CancelEnvironmentDeploymentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CancelServiceInstanceDeploymentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment',
    '/#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CancelServiceInstanceDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CancelServiceInstanceDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CancelServiceInstanceDeployment<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment']['$post']
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
    getPostXAmzTargetAwsProton20200720CancelServiceInstanceDeploymentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CancelServicePipelineDeploymentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment',
    '/#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CancelServicePipelineDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CancelServicePipelineDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CancelServicePipelineDeployment<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment']['$post']
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
    getPostXAmzTargetAwsProton20200720CancelServicePipelineDeploymentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateComponentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateComponent',
    '/#X-Amz-Target=AwsProton20200720.CreateComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateComponent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateComponent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateComponent'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateComponent<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateComponent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateComponent']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720CreateComponentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateEnvironment',
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateEnvironment'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateEnvironment<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironment']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720CreateEnvironmentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateEnvironmentAccountConnection<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection']['$post']
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
    getPostXAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate',
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateEnvironmentTemplate<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate']['$post']
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
    getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersion<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion']['$post']
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
    getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateRepositoryMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateRepository',
    '/#X-Amz-Target=AwsProton20200720.CreateRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateRepository']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateRepository']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateRepository'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateRepository<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateRepository']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateRepository']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720CreateRepositoryMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateServiceMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateService',
    '/#X-Amz-Target=AwsProton20200720.CreateService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateService']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateService'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateService<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateService']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateService']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720CreateServiceMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateServiceInstanceMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateServiceInstance',
    '/#X-Amz-Target=AwsProton20200720.CreateServiceInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateServiceInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateServiceInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateServiceInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateServiceInstance<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceInstance']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720CreateServiceInstanceMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateServiceSyncConfigMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateServiceSyncConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateServiceSyncConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateServiceSyncConfig<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720CreateServiceSyncConfigMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateServiceTemplateMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateServiceTemplate',
    '/#X-Amz-Target=AwsProton20200720.CreateServiceTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateServiceTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateServiceTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateServiceTemplate<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720CreateServiceTemplateMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateServiceTemplateVersionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateServiceTemplateVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateServiceTemplateVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateServiceTemplateVersion<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion']['$post']
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
    getPostXAmzTargetAwsProton20200720CreateServiceTemplateVersionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720CreateTemplateSyncConfigMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720CreateTemplateSyncConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720CreateTemplateSyncConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720CreateTemplateSyncConfig<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig']['$post']
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
    getPostXAmzTargetAwsProton20200720CreateTemplateSyncConfigMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteComponentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteComponent',
    '/#X-Amz-Target=AwsProton20200720.DeleteComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteComponent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteComponent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteComponent'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteComponent<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteComponent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteComponent']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720DeleteComponentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteEnvironment',
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteEnvironment'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteEnvironment<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironment']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720DeleteEnvironmentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnection<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection']['$post']
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
    getPostXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate',
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteEnvironmentTemplate<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate']['$post']
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
    getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersion<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion']['$post']
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
    getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteRepositoryMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteRepository',
    '/#X-Amz-Target=AwsProton20200720.DeleteRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteRepository']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteRepository']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteRepository'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteRepository<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteRepository']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteRepository']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720DeleteRepositoryMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteServiceMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteService',
    '/#X-Amz-Target=AwsProton20200720.DeleteService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteService']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteService'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteService<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteService']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteService']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720DeleteServiceMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteServiceSyncConfigMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteServiceSyncConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteServiceSyncConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteServiceSyncConfig<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720DeleteServiceSyncConfigMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteServiceTemplateMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate',
    '/#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteServiceTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteServiceTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteServiceTemplate<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720DeleteServiceTemplateMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteServiceTemplateVersionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteServiceTemplateVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteServiceTemplateVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteServiceTemplateVersion<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion']['$post']
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
    getPostXAmzTargetAwsProton20200720DeleteServiceTemplateVersionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720DeleteTemplateSyncConfigMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720DeleteTemplateSyncConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720DeleteTemplateSyncConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720DeleteTemplateSyncConfig<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig']['$post']
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
    getPostXAmzTargetAwsProton20200720DeleteTemplateSyncConfigMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetAccountSettingsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetAccountSettings',
    '/#X-Amz-Target=AwsProton20200720.GetAccountSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetAccountSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetAccountSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetAccountSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetAccountSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetAccountSettings'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetAccountSettings<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetAccountSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetAccountSettings']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetAccountSettingsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetComponentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetComponent',
    '/#X-Amz-Target=AwsProton20200720.GetComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetComponent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetComponent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetComponent'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetComponent<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetComponent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetComponent']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetComponentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetEnvironmentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetEnvironment',
    '/#X-Amz-Target=AwsProton20200720.GetEnvironment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironment']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetEnvironment'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetEnvironment<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironment']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetEnvironmentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetEnvironmentAccountConnectionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetEnvironmentAccountConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetEnvironmentAccountConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetEnvironmentAccountConnection<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection']['$post']
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
    getPostXAmzTargetAwsProton20200720GetEnvironmentAccountConnectionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate',
    '/#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetEnvironmentTemplate<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateVersionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetEnvironmentTemplateVersion<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion']['$post']
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
    getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateVersionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetRepositoryMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetRepository',
    '/#X-Amz-Target=AwsProton20200720.GetRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetRepository']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetRepository']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetRepository'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetRepository<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepository']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepository']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetRepositoryMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetRepositorySyncStatusMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus',
    '/#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetRepositorySyncStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetRepositorySyncStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetRepositorySyncStatus<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetRepositorySyncStatusMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetResourcesSummaryMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetResourcesSummary',
    '/#X-Amz-Target=AwsProton20200720.GetResourcesSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetResourcesSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetResourcesSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetResourcesSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetResourcesSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetResourcesSummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetResourcesSummary'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetResourcesSummary<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetResourcesSummary']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetResourcesSummary']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetResourcesSummaryMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetServiceMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetService',
    '/#X-Amz-Target=AwsProton20200720.GetService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetService']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetService'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetService<
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
                  ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetService']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetService']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetServiceMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetServiceInstanceMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceInstance',
    '/#X-Amz-Target=AwsProton20200720.GetServiceInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetServiceInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetServiceInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetServiceInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetServiceInstance<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstance']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetServiceInstanceMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetServiceInstanceSyncStatusMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus',
    '/#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetServiceInstanceSyncStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetServiceInstanceSyncStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetServiceInstanceSyncStatus<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus']['$post']
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
    getPostXAmzTargetAwsProton20200720GetServiceInstanceSyncStatusMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary',
    '/#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetServiceSyncBlockerSummary<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary']['$post']
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
    getPostXAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetServiceSyncConfigMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetServiceSyncConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetServiceSyncConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetServiceSyncConfig<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetServiceSyncConfigMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetServiceTemplateMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceTemplate',
    '/#X-Amz-Target=AwsProton20200720.GetServiceTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetServiceTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetServiceTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetServiceTemplate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetServiceTemplate<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplate']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetServiceTemplateMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetServiceTemplateVersionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetServiceTemplateVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetServiceTemplateVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetServiceTemplateVersion<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion']['$post']
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
    getPostXAmzTargetAwsProton20200720GetServiceTemplateVersionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetTemplateSyncConfigMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetTemplateSyncConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetTemplateSyncConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetTemplateSyncConfig<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetTemplateSyncConfigMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720GetTemplateSyncStatusMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus',
    '/#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720GetTemplateSyncStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720GetTemplateSyncStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720GetTemplateSyncStatus<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720GetTemplateSyncStatusMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListComponentOutputsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListComponentOutputs',
    '/#X-Amz-Target=AwsProton20200720.ListComponentOutputs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListComponentOutputsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentOutputs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentOutputs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListComponentOutputsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentOutputs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListComponentOutputs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListComponentOutputs<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentOutputs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentOutputs']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720ListComponentOutputsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListComponentProvisionedResourcesMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources',
    '/#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListComponentProvisionedResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListComponentProvisionedResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListComponentProvisionedResources<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources']['$post']
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
    getPostXAmzTargetAwsProton20200720ListComponentProvisionedResourcesMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListComponentsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListComponents',
    '/#X-Amz-Target=AwsProton20200720.ListComponents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListComponentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListComponents']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListComponents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListComponentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListComponents'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListComponents<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponents']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720ListComponentsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListEnvironmentAccountConnections<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections']['$post']
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
    getPostXAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListEnvironmentOutputsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentOutputsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListEnvironmentOutputsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListEnvironmentOutputs<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720ListEnvironmentOutputsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListEnvironmentProvisionedResources<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources']['$post']
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
    getPostXAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListEnvironmentTemplateVersions<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions']['$post']
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
    getPostXAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListEnvironmentTemplatesMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListEnvironmentTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListEnvironmentTemplates<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates']['$post']
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
    getPostXAmzTargetAwsProton20200720ListEnvironmentTemplatesMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListEnvironmentsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironments',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironments',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironments']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListEnvironments'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListEnvironments<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironments']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720ListEnvironmentsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListRepositoriesMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListRepositories',
    '/#X-Amz-Target=AwsProton20200720.ListRepositories',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositories']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListRepositoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListRepositories'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListRepositories<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositories']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositories']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720ListRepositoriesMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListRepositorySyncDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions',
    '/#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListRepositorySyncDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListRepositorySyncDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListRepositorySyncDefinitions<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions']['$post']
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
    getPostXAmzTargetAwsProton20200720ListRepositorySyncDefinitionsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListServiceInstanceOutputsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs',
    '/#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListServiceInstanceOutputsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListServiceInstanceOutputsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListServiceInstanceOutputs<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs']['$post']
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
    getPostXAmzTargetAwsProton20200720ListServiceInstanceOutputsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources',
    '/#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResources<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources']['$post']
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
    getPostXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListServiceInstancesMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServiceInstances',
    '/#X-Amz-Target=AwsProton20200720.ListServiceInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListServiceInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListServiceInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListServiceInstances'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListServiceInstances<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstances']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720ListServiceInstancesMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListServicePipelineOutputsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs',
    '/#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListServicePipelineOutputsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListServicePipelineOutputsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListServicePipelineOutputs<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs']['$post']
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
    getPostXAmzTargetAwsProton20200720ListServicePipelineOutputsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources',
    '/#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListServicePipelineProvisionedResources<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources']['$post']
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
    getPostXAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListServiceTemplateVersionsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions',
    '/#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListServiceTemplateVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListServiceTemplateVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListServiceTemplateVersions<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions']['$post']
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
    getPostXAmzTargetAwsProton20200720ListServiceTemplateVersionsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListServiceTemplatesMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServiceTemplates',
    '/#X-Amz-Target=AwsProton20200720.ListServiceTemplates',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListServiceTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListServiceTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListServiceTemplates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListServiceTemplates<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplates']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplates']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720ListServiceTemplatesMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListServicesMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServices',
    '/#X-Amz-Target=AwsProton20200720.ListServices',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListServices']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListServices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListServices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListServices'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListServices<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServices']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServices']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720ListServicesMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListTagsForResource',
    '/#X-Amz-Target=AwsProton20200720.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720ListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListTagsForResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange',
    '/#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChange<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange']['$post']
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
    getPostXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720RejectEnvironmentAccountConnection<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection']['$post']
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
    getPostXAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.TagResource',
    '/#X-Amz-Target=AwsProton20200720.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720TagResource<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.TagResource']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720TagResourceMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UntagResource',
    '/#X-Amz-Target=AwsProton20200720.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UntagResource<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UntagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720UntagResourceMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateAccountSettingsMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateAccountSettings',
    '/#X-Amz-Target=AwsProton20200720.UpdateAccountSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateAccountSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateAccountSettings<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720UpdateAccountSettingsMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateComponentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateComponent',
    '/#X-Amz-Target=AwsProton20200720.UpdateComponent',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.UpdateComponent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.UpdateComponent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateComponentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateComponent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateComponent'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateComponent<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateComponent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateComponent']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720UpdateComponentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateEnvironment',
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateEnvironment'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateEnvironment<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironment']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720UpdateEnvironmentMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnection<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection']['$post']
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
    getPostXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate',
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateEnvironmentTemplate<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate']['$post']
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
    getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersion<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion']['$post']
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
    getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateServiceMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateService',
    '/#X-Amz-Target=AwsProton20200720.UpdateService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AwsProton20200720.UpdateService']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.UpdateService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateService'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateService<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateService']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateService']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720UpdateServiceMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateServiceInstanceMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServiceInstance',
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateServiceInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateServiceInstance<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720UpdateServiceInstanceMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateServicePipelineMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServicePipeline',
    '/#X-Amz-Target=AwsProton20200720.UpdateServicePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateServicePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateServicePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateServicePipeline<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720UpdateServicePipelineMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateServiceSyncBlockerMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker',
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceSyncBlockerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateServiceSyncBlockerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateServiceSyncBlocker<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker']['$post']
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
    getPostXAmzTargetAwsProton20200720UpdateServiceSyncBlockerMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateServiceSyncConfigMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceSyncConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateServiceSyncConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateServiceSyncConfig<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720UpdateServiceSyncConfigMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateServiceTemplateMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate',
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateServiceTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateServiceTemplate<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate']['$post']
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
  const mutationDefaults = getPostXAmzTargetAwsProton20200720UpdateServiceTemplateMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateServiceTemplateVersionMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceTemplateVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateServiceTemplateVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateServiceTemplateVersion<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion']['$post']
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
    getPostXAmzTargetAwsProton20200720UpdateServiceTemplateVersionMutationOptions<
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

export function getPostXAmzTargetAwsProton20200720UpdateTemplateSyncConfigMutationKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAwsProton20200720UpdateTemplateSyncConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAwsProton20200720UpdateTemplateSyncConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAwsProton20200720UpdateTemplateSyncConfig<
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
                    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig']['$post']
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
    getPostXAmzTargetAwsProton20200720UpdateTemplateSyncConfigMutationOptions<
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
