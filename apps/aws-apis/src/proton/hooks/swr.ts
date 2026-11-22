import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CancelComponentDeploymentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CancelComponentDeployment',
    '/#X-Amz-Target=AwsProton20200720.CancelComponentDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CancelComponentDeployment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CancelComponentDeploymentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CancelEnvironmentDeploymentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment',
    '/#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CancelEnvironmentDeployment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CancelEnvironmentDeploymentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CancelServiceInstanceDeploymentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment',
    '/#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CancelServiceInstanceDeployment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CancelServiceInstanceDeploymentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CancelServicePipelineDeploymentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment',
    '/#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CancelServicePipelineDeployment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CancelServicePipelineDeploymentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateComponentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateComponent',
    '/#X-Amz-Target=AwsProton20200720.CreateComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateComponent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CreateComponentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateEnvironment',
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateEnvironment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CreateEnvironmentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateEnvironment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateEnvironmentAccountConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate',
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateEnvironmentTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateRepositoryKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateRepository',
    '/#X-Amz-Target=AwsProton20200720.CreateRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateRepository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CreateRepositoryKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateServiceKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateService',
    '/#X-Amz-Target=AwsProton20200720.CreateService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CreateServiceKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateService'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateServiceInstanceKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateServiceInstance',
    '/#X-Amz-Target=AwsProton20200720.CreateServiceInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateServiceInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CreateServiceInstanceKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateServiceInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateServiceSyncConfigKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateServiceSyncConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CreateServiceSyncConfigKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateServiceTemplateKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateServiceTemplate',
    '/#X-Amz-Target=AwsProton20200720.CreateServiceTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateServiceTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CreateServiceTemplateKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateServiceTemplateVersionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateServiceTemplateVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CreateServiceTemplateVersionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720CreateTemplateSyncConfigKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720CreateTemplateSyncConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720CreateTemplateSyncConfigKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteComponentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteComponent',
    '/#X-Amz-Target=AwsProton20200720.DeleteComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteComponent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720DeleteComponentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteEnvironment',
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteEnvironment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720DeleteEnvironmentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteEnvironment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate',
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteEnvironmentTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteRepositoryKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteRepository',
    '/#X-Amz-Target=AwsProton20200720.DeleteRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteRepository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720DeleteRepositoryKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteServiceKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteService',
    '/#X-Amz-Target=AwsProton20200720.DeleteService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720DeleteServiceKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteService'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteServiceSyncConfigKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteServiceSyncConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720DeleteServiceSyncConfigKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteServiceTemplateKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate',
    '/#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteServiceTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720DeleteServiceTemplateKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteServiceTemplateVersionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteServiceTemplateVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720DeleteServiceTemplateVersionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720DeleteTemplateSyncConfigKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720DeleteTemplateSyncConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720DeleteTemplateSyncConfigKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetAccountSettingsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetAccountSettings',
    '/#X-Amz-Target=AwsProton20200720.GetAccountSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetAccountSettings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetAccountSettingsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetAccountSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetAccountSettings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetComponentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetComponent',
    '/#X-Amz-Target=AwsProton20200720.GetComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetComponent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetComponentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetEnvironmentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetEnvironment',
    '/#X-Amz-Target=AwsProton20200720.GetEnvironment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetEnvironment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetEnvironmentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetEnvironment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetEnvironmentAccountConnectionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetEnvironmentAccountConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetEnvironmentAccountConnectionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate',
    '/#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetEnvironmentTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateVersionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetEnvironmentTemplateVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetEnvironmentTemplateVersionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetRepositoryKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetRepository',
    '/#X-Amz-Target=AwsProton20200720.GetRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetRepository']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetRepositoryKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetRepositorySyncStatusKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus',
    '/#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetRepositorySyncStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetRepositorySyncStatusKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetResourcesSummaryKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetResourcesSummary',
    '/#X-Amz-Target=AwsProton20200720.GetResourcesSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetResourcesSummary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetResourcesSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetResourcesSummaryKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetResourcesSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetResourcesSummary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetServiceKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetService',
    '/#X-Amz-Target=AwsProton20200720.GetService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetServiceKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetService'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetServiceInstanceKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceInstance',
    '/#X-Amz-Target=AwsProton20200720.GetServiceInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetServiceInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetServiceInstanceKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetServiceInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetServiceInstanceSyncStatusKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus',
    '/#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetServiceInstanceSyncStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetServiceInstanceSyncStatusKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary',
    '/#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetServiceSyncBlockerSummary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetServiceSyncConfigKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetServiceSyncConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetServiceSyncConfigKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetServiceTemplateKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceTemplate',
    '/#X-Amz-Target=AwsProton20200720.GetServiceTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetServiceTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetServiceTemplateKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetServiceTemplate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetServiceTemplateVersionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetServiceTemplateVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetServiceTemplateVersionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetTemplateSyncConfigKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetTemplateSyncConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetTemplateSyncConfigKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720GetTemplateSyncStatusKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus',
    '/#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720GetTemplateSyncStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720GetTemplateSyncStatusKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListComponentOutputsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListComponentOutputs',
    '/#X-Amz-Target=AwsProton20200720.ListComponentOutputs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListComponentOutputs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentOutputs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListComponentOutputsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentOutputs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListComponentOutputs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListComponentProvisionedResourcesKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources',
    '/#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListComponentProvisionedResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720ListComponentProvisionedResourcesKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListComponentsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListComponents',
    '/#X-Amz-Target=AwsProton20200720.ListComponents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListComponents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListComponents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListComponentsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListComponents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListEnvironmentAccountConnections<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentOutputsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListEnvironmentOutputs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListEnvironmentOutputsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListEnvironmentProvisionedResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListEnvironmentTemplateVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentTemplatesKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListEnvironmentTemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListEnvironmentTemplatesKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListEnvironmentsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListEnvironments',
    '/#X-Amz-Target=AwsProton20200720.ListEnvironments',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListEnvironmentsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListEnvironments'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListRepositoriesKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListRepositories',
    '/#X-Amz-Target=AwsProton20200720.ListRepositories',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListRepositories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListRepositoriesKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListRepositories'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListRepositorySyncDefinitionsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions',
    '/#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListRepositorySyncDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListRepositorySyncDefinitionsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListServiceInstanceOutputsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs',
    '/#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListServiceInstanceOutputs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListServiceInstanceOutputsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources',
    '/#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListServiceInstancesKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServiceInstances',
    '/#X-Amz-Target=AwsProton20200720.ListServiceInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListServiceInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListServiceInstancesKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListServiceInstances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListServicePipelineOutputsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs',
    '/#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListServicePipelineOutputs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListServicePipelineOutputsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources',
    '/#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListServicePipelineProvisionedResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListServiceTemplateVersionsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions',
    '/#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListServiceTemplateVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListServiceTemplateVersionsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListServiceTemplatesKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServiceTemplates',
    '/#X-Amz-Target=AwsProton20200720.ListServiceTemplates',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListServiceTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListServiceTemplatesKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListServiceTemplates'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListServicesKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListServices',
    '/#X-Amz-Target=AwsProton20200720.ListServices',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListServices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListServicesKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListServices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListServices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.ListTagsForResource',
    '/#X-Amz-Target=AwsProton20200720.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange',
    '/#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChange<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720RejectEnvironmentAccountConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720TagResourceKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.TagResource',
    '/#X-Amz-Target=AwsProton20200720.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720TagResourceKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UntagResourceKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UntagResource',
    '/#X-Amz-Target=AwsProton20200720.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateAccountSettingsKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateAccountSettings',
    '/#X-Amz-Target=AwsProton20200720.UpdateAccountSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateAccountSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateAccountSettingsKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateComponentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateComponent',
    '/#X-Amz-Target=AwsProton20200720.UpdateComponent',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.UpdateComponent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateComponentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateComponent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateComponent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateEnvironment',
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateEnvironment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateEnvironmentKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateEnvironment'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection',
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate',
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateEnvironmentTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateService',
    '/#X-Amz-Target=AwsProton20200720.UpdateService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.UpdateService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateServiceKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateService'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceInstanceKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServiceInstance',
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateServiceInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateServiceInstanceKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateServicePipelineKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServicePipeline',
    '/#X-Amz-Target=AwsProton20200720.UpdateServicePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateServicePipeline<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateServicePipelineKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceSyncBlockerKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker',
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateServiceSyncBlocker<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateServiceSyncBlockerKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceSyncConfigKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateServiceSyncConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateServiceSyncConfigKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceTemplateKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate',
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateServiceTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateServiceTemplateKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateServiceTemplateVersionKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion',
    '/#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateServiceTemplateVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateServiceTemplateVersionKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAwsProton20200720UpdateTemplateSyncConfigKey() {
  return [
    '#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig',
    '/#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAwsProton20200720UpdateTemplateSyncConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAwsProton20200720UpdateTemplateSyncConfigKey()
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
            (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
