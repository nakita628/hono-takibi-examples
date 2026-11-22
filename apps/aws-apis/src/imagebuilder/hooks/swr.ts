import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCancelImageCreationKey() {
  return ['CancelImageCreation'] as const
}

export function getCreateComponentKey() {
  return ['CreateComponent'] as const
}

export function getCreateContainerRecipeKey() {
  return ['CreateContainerRecipe'] as const
}

export function getCreateDistributionConfigurationKey() {
  return ['CreateDistributionConfiguration'] as const
}

export function getCreateImageKey() {
  return ['CreateImage'] as const
}

export function getCreateImagePipelineKey() {
  return ['CreateImagePipeline'] as const
}

export function getCreateImageRecipeKey() {
  return ['CreateImageRecipe'] as const
}

export function getCreateInfrastructureConfigurationKey() {
  return ['CreateInfrastructureConfiguration'] as const
}

export function getDeleteComponentComponentBuildVersionArnKey() {
  return ['DeleteComponent#componentBuildVersionArn'] as const
}

export function getDeleteContainerRecipeContainerRecipeArnKey() {
  return ['DeleteContainerRecipe#containerRecipeArn'] as const
}

export function getDeleteDistributionConfigurationDistributionConfigurationArnKey() {
  return ['DeleteDistributionConfiguration#distributionConfigurationArn'] as const
}

export function getDeleteImageImageBuildVersionArnKey() {
  return ['DeleteImage#imageBuildVersionArn'] as const
}

export function getDeleteImagePipelineImagePipelineArnKey() {
  return ['DeleteImagePipeline#imagePipelineArn'] as const
}

export function getDeleteImageRecipeImageRecipeArnKey() {
  return ['DeleteImageRecipe#imageRecipeArn'] as const
}

export function getDeleteInfrastructureConfigurationInfrastructureConfigurationArnKey() {
  return ['DeleteInfrastructureConfiguration#infrastructureConfigurationArn'] as const
}

export function getGetComponentComponentBuildVersionArnKey() {
  return ['GetComponent#componentBuildVersionArn'] as const
}

export function getGetComponentPolicyComponentArnKey() {
  return ['GetComponentPolicy#componentArn'] as const
}

export function getGetContainerRecipeContainerRecipeArnKey() {
  return ['GetContainerRecipe#containerRecipeArn'] as const
}

export function getGetContainerRecipePolicyContainerRecipeArnKey() {
  return ['GetContainerRecipePolicy#containerRecipeArn'] as const
}

export function getGetDistributionConfigurationDistributionConfigurationArnKey() {
  return ['GetDistributionConfiguration#distributionConfigurationArn'] as const
}

export function getGetImageImageBuildVersionArnKey() {
  return ['GetImage#imageBuildVersionArn'] as const
}

export function getGetImagePipelineImagePipelineArnKey() {
  return ['GetImagePipeline#imagePipelineArn'] as const
}

export function getGetImagePolicyImageArnKey() {
  return ['GetImagePolicy#imageArn'] as const
}

export function getGetImageRecipeImageRecipeArnKey() {
  return ['GetImageRecipe#imageRecipeArn'] as const
}

export function getGetImageRecipePolicyImageRecipeArnKey() {
  return ['GetImageRecipePolicy#imageRecipeArn'] as const
}

export function getGetInfrastructureConfigurationInfrastructureConfigurationArnKey() {
  return ['GetInfrastructureConfiguration#infrastructureConfigurationArn'] as const
}

export function getGetWorkflowExecutionWorkflowExecutionIdKey() {
  return ['GetWorkflowExecution#workflowExecutionId'] as const
}

export function getGetWorkflowStepExecutionStepExecutionIdKey() {
  return ['GetWorkflowStepExecution#stepExecutionId'] as const
}

export function getImportComponentKey() {
  return ['ImportComponent'] as const
}

export function getImportVmImageKey() {
  return ['ImportVmImage'] as const
}

export function getListComponentBuildVersionsKey() {
  return ['ListComponentBuildVersions'] as const
}

export function getListComponentsKey() {
  return ['ListComponents'] as const
}

export function getListContainerRecipesKey() {
  return ['ListContainerRecipes'] as const
}

export function getListDistributionConfigurationsKey() {
  return ['ListDistributionConfigurations'] as const
}

export function getListImageBuildVersionsKey() {
  return ['ListImageBuildVersions'] as const
}

export function getListImagePackagesKey() {
  return ['ListImagePackages'] as const
}

export function getListImagePipelineImagesKey() {
  return ['ListImagePipelineImages'] as const
}

export function getListImagePipelinesKey() {
  return ['ListImagePipelines'] as const
}

export function getListImageRecipesKey() {
  return ['ListImageRecipes'] as const
}

export function getListImageScanFindingAggregationsKey() {
  return ['ListImageScanFindingAggregations'] as const
}

export function getListImageScanFindingsKey() {
  return ['ListImageScanFindings'] as const
}

export function getListImagesKey() {
  return ['ListImages'] as const
}

export function getListInfrastructureConfigurationsKey() {
  return ['ListInfrastructureConfigurations'] as const
}

export function getListWorkflowExecutionsKey() {
  return ['ListWorkflowExecutions'] as const
}

export function getListWorkflowStepExecutionsKey() {
  return ['ListWorkflowStepExecutions'] as const
}

export function getPutComponentPolicyKey() {
  return ['PutComponentPolicy'] as const
}

export function getPutContainerRecipePolicyKey() {
  return ['PutContainerRecipePolicy'] as const
}

export function getPutImagePolicyKey() {
  return ['PutImagePolicy'] as const
}

export function getPutImageRecipePolicyKey() {
  return ['PutImageRecipePolicy'] as const
}

export function getStartImagePipelineExecutionKey() {
  return ['StartImagePipelineExecution'] as const
}

export function getUpdateDistributionConfigurationKey() {
  return ['UpdateDistributionConfiguration'] as const
}

export function getUpdateImagePipelineKey() {
  return ['UpdateImagePipeline'] as const
}

export function getUpdateInfrastructureConfigurationKey() {
  return ['UpdateInfrastructureConfiguration'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutCancelImageCreationKey() {
  return ['CancelImageCreation', '/CancelImageCreation', 'PUT'] as const
}

export function usePutCancelImageCreation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CancelImageCreation.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CancelImageCreation.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCancelImageCreationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CancelImageCreation.$put> }) =>
        parseResponse(client.CancelImageCreation.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCreateComponentKey() {
  return ['CreateComponent', '/CreateComponent', 'PUT'] as const
}

export function usePutCreateComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateComponent.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateComponent.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreateComponentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateComponent.$put> }) =>
        parseResponse(client.CreateComponent.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCreateContainerRecipeKey() {
  return ['CreateContainerRecipe', '/CreateContainerRecipe', 'PUT'] as const
}

export function usePutCreateContainerRecipe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CreateContainerRecipe.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateContainerRecipe.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreateContainerRecipeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CreateContainerRecipe.$put> },
      ) => parseResponse(client.CreateContainerRecipe.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCreateDistributionConfigurationKey() {
  return ['CreateDistributionConfiguration', '/CreateDistributionConfiguration', 'PUT'] as const
}

export function usePutCreateDistributionConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.CreateDistributionConfiguration.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateDistributionConfiguration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreateDistributionConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CreateDistributionConfiguration.$put> },
      ) => parseResponse(client.CreateDistributionConfiguration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCreateImageKey() {
  return ['CreateImage', '/CreateImage', 'PUT'] as const
}

export function usePutCreateImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateImage.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.CreateImage.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreateImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateImage.$put> }) =>
        parseResponse(client.CreateImage.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCreateImagePipelineKey() {
  return ['CreateImagePipeline', '/CreateImagePipeline', 'PUT'] as const
}

export function usePutCreateImagePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateImagePipeline.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateImagePipeline.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreateImagePipelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateImagePipeline.$put> }) =>
        parseResponse(client.CreateImagePipeline.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCreateImageRecipeKey() {
  return ['CreateImageRecipe', '/CreateImageRecipe', 'PUT'] as const
}

export function usePutCreateImageRecipe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateImageRecipe.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateImageRecipe.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreateImageRecipeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateImageRecipe.$put> }) =>
        parseResponse(client.CreateImageRecipe.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCreateInfrastructureConfigurationKey() {
  return ['CreateInfrastructureConfiguration', '/CreateInfrastructureConfiguration', 'PUT'] as const
}

export function usePutCreateInfrastructureConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.CreateInfrastructureConfiguration.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateInfrastructureConfiguration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCreateInfrastructureConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CreateInfrastructureConfiguration.$put> },
      ) => parseResponse(client.CreateInfrastructureConfiguration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeleteComponentComponentBuildVersionArnKey() {
  return [
    'DeleteComponent#componentBuildVersionArn',
    '/DeleteComponent#componentBuildVersionArn',
    'DELETE',
  ] as const
}

export function useDeleteDeleteComponentComponentBuildVersionArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['DeleteComponent#componentBuildVersionArn']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['DeleteComponent#componentBuildVersionArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeleteComponentComponentBuildVersionArnKey()
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
            (typeof client)['DeleteComponent#componentBuildVersionArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['DeleteComponent#componentBuildVersionArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeleteContainerRecipeContainerRecipeArnKey() {
  return [
    'DeleteContainerRecipe#containerRecipeArn',
    '/DeleteContainerRecipe#containerRecipeArn',
    'DELETE',
  ] as const
}

export function useDeleteDeleteContainerRecipeContainerRecipeArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['DeleteContainerRecipe#containerRecipeArn']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['DeleteContainerRecipe#containerRecipeArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeleteContainerRecipeContainerRecipeArnKey()
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
            (typeof client)['DeleteContainerRecipe#containerRecipeArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['DeleteContainerRecipe#containerRecipeArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeleteDistributionConfigurationDistributionConfigurationArnKey() {
  return [
    'DeleteDistributionConfiguration#distributionConfigurationArn',
    '/DeleteDistributionConfiguration#distributionConfigurationArn',
    'DELETE',
  ] as const
}

export function useDeleteDeleteDistributionConfigurationDistributionConfigurationArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['DeleteDistributionConfiguration#distributionConfigurationArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['DeleteDistributionConfiguration#distributionConfigurationArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteDeleteDistributionConfigurationDistributionConfigurationArnKey()
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
            (typeof client)['DeleteDistributionConfiguration#distributionConfigurationArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['DeleteDistributionConfiguration#distributionConfigurationArn'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeleteImageImageBuildVersionArnKey() {
  return [
    'DeleteImage#imageBuildVersionArn',
    '/DeleteImage#imageBuildVersionArn',
    'DELETE',
  ] as const
}

export function useDeleteDeleteImageImageBuildVersionArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['DeleteImage#imageBuildVersionArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['DeleteImage#imageBuildVersionArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeleteImageImageBuildVersionArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['DeleteImage#imageBuildVersionArn']['$delete']>
        },
      ) => parseResponse(client['DeleteImage#imageBuildVersionArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeleteImagePipelineImagePipelineArnKey() {
  return [
    'DeleteImagePipeline#imagePipelineArn',
    '/DeleteImagePipeline#imagePipelineArn',
    'DELETE',
  ] as const
}

export function useDeleteDeleteImagePipelineImagePipelineArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['DeleteImagePipeline#imagePipelineArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['DeleteImagePipeline#imagePipelineArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeleteImagePipelineImagePipelineArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['DeleteImagePipeline#imagePipelineArn']['$delete']>
        },
      ) =>
        parseResponse(client['DeleteImagePipeline#imagePipelineArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeleteImageRecipeImageRecipeArnKey() {
  return [
    'DeleteImageRecipe#imageRecipeArn',
    '/DeleteImageRecipe#imageRecipeArn',
    'DELETE',
  ] as const
}

export function useDeleteDeleteImageRecipeImageRecipeArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['DeleteImageRecipe#imageRecipeArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['DeleteImageRecipe#imageRecipeArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeleteImageRecipeImageRecipeArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['DeleteImageRecipe#imageRecipeArn']['$delete']>
        },
      ) => parseResponse(client['DeleteImageRecipe#imageRecipeArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnKey() {
  return [
    'DeleteInfrastructureConfiguration#infrastructureConfigurationArn',
    '/DeleteInfrastructureConfiguration#infrastructureConfigurationArn',
    'DELETE',
  ] as const
}

export function useDeleteDeleteInfrastructureConfigurationInfrastructureConfigurationArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['DeleteInfrastructureConfiguration#infrastructureConfigurationArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['DeleteInfrastructureConfiguration#infrastructureConfigurationArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnKey()
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
            (typeof client)['DeleteInfrastructureConfiguration#infrastructureConfigurationArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['DeleteInfrastructureConfiguration#infrastructureConfigurationArn'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGetComponentComponentBuildVersionArnKey(
  args: InferRequestType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetComponent#componentBuildVersionArn',
    '/GetComponent#componentBuildVersionArn',
    keyArgs,
  ] as const
}

export function useGetGetComponentComponentBuildVersionArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>>
          >
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
        ? getGetGetComponentComponentBuildVersionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetComponent#componentBuildVersionArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetComponentComponentBuildVersionArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>>
          >
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
        ? getGetGetComponentComponentBuildVersionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetComponent#componentBuildVersionArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetComponentPolicyComponentArnKey(
  args: InferRequestType<(typeof client)['GetComponentPolicy#componentArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['GetComponentPolicy#componentArn', '/GetComponentPolicy#componentArn', keyArgs] as const
}

export function useGetGetComponentPolicyComponentArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetComponentPolicy#componentArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetComponentPolicy#componentArn']['$get']>>
          >
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
        ? getGetGetComponentPolicyComponentArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetComponentPolicy#componentArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetComponentPolicy#componentArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetComponentPolicyComponentArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetComponentPolicy#componentArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetComponentPolicy#componentArn']['$get']>>
          >
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
        ? getGetGetComponentPolicyComponentArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetComponentPolicy#componentArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetComponentPolicy#componentArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetContainerRecipeContainerRecipeArnKey(
  args: InferRequestType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetContainerRecipe#containerRecipeArn',
    '/GetContainerRecipe#containerRecipeArn',
    keyArgs,
  ] as const
}

export function useGetGetContainerRecipeContainerRecipeArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>>
          >
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
        ? getGetGetContainerRecipeContainerRecipeArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetContainerRecipe#containerRecipeArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetContainerRecipeContainerRecipeArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>>
          >
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
        ? getGetGetContainerRecipeContainerRecipeArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetContainerRecipe#containerRecipeArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetContainerRecipePolicyContainerRecipeArnKey(
  args: InferRequestType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetContainerRecipePolicy#containerRecipeArn',
    '/GetContainerRecipePolicy#containerRecipeArn',
    keyArgs,
  ] as const
}

export function useGetGetContainerRecipePolicyContainerRecipeArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>
            >
          >
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
        ? getGetGetContainerRecipePolicyContainerRecipeArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['GetContainerRecipePolicy#containerRecipeArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetContainerRecipePolicyContainerRecipeArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>
            >
          >
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
        ? getGetGetContainerRecipePolicyContainerRecipeArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['GetContainerRecipePolicy#containerRecipeArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGetDistributionConfigurationDistributionConfigurationArnKey(
  args: InferRequestType<
    (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetDistributionConfiguration#distributionConfigurationArn',
    '/GetDistributionConfiguration#distributionConfigurationArn',
    keyArgs,
  ] as const
}

export function useGetGetDistributionConfigurationDistributionConfigurationArn<TError = unknown>(
  args: InferRequestType<
    (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
              >
            >
          >
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
        ? getGetGetDistributionConfigurationDistributionConfigurationArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['GetDistributionConfiguration#distributionConfigurationArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetDistributionConfigurationDistributionConfigurationArn<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
              >
            >
          >
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
        ? getGetGetDistributionConfigurationDistributionConfigurationArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['GetDistributionConfiguration#distributionConfigurationArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGetImageImageBuildVersionArnKey(
  args: InferRequestType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['GetImage#imageBuildVersionArn', '/GetImage#imageBuildVersionArn', keyArgs] as const
}

export function useGetGetImageImageBuildVersionArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>>
          >
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
        ? getGetGetImageImageBuildVersionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['GetImage#imageBuildVersionArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetImageImageBuildVersionArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>>
          >
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
        ? getGetGetImageImageBuildVersionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['GetImage#imageBuildVersionArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetImagePipelineImagePipelineArnKey(
  args: InferRequestType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetImagePipeline#imagePipelineArn',
    '/GetImagePipeline#imagePipelineArn',
    keyArgs,
  ] as const
}

export function useGetGetImagePipelineImagePipelineArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>>
          >
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
        ? getGetGetImagePipelineImagePipelineArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetImagePipeline#imagePipelineArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetImagePipelineImagePipelineArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>>
          >
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
        ? getGetGetImagePipelineImagePipelineArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetImagePipeline#imagePipelineArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetImagePolicyImageArnKey(
  args: InferRequestType<(typeof client)['GetImagePolicy#imageArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['GetImagePolicy#imageArn', '/GetImagePolicy#imageArn', keyArgs] as const
}

export function useGetGetImagePolicyImageArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetImagePolicy#imageArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImagePolicy#imageArn']['$get']>>
          >
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
        ? getGetGetImagePolicyImageArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImagePolicy#imageArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['GetImagePolicy#imageArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetImagePolicyImageArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetImagePolicy#imageArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImagePolicy#imageArn']['$get']>>
          >
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
        ? getGetGetImagePolicyImageArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImagePolicy#imageArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['GetImagePolicy#imageArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetImageRecipeImageRecipeArnKey(
  args: InferRequestType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['GetImageRecipe#imageRecipeArn', '/GetImageRecipe#imageRecipeArn', keyArgs] as const
}

export function useGetGetImageRecipeImageRecipeArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>>
          >
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
        ? getGetGetImageRecipeImageRecipeArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['GetImageRecipe#imageRecipeArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetImageRecipeImageRecipeArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>>
          >
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
        ? getGetGetImageRecipeImageRecipeArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['GetImageRecipe#imageRecipeArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetImageRecipePolicyImageRecipeArnKey(
  args: InferRequestType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetImageRecipePolicy#imageRecipeArn',
    '/GetImageRecipePolicy#imageRecipeArn',
    keyArgs,
  ] as const
}

export function useGetGetImageRecipePolicyImageRecipeArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>>
          >
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
        ? getGetGetImageRecipePolicyImageRecipeArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetImageRecipePolicy#imageRecipeArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetImageRecipePolicyImageRecipeArn<TError = unknown>(
  args: InferRequestType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>>
          >
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
        ? getGetGetImageRecipePolicyImageRecipeArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetImageRecipePolicy#imageRecipeArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetInfrastructureConfigurationInfrastructureConfigurationArnKey(
  args: InferRequestType<
    (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetInfrastructureConfiguration#infrastructureConfigurationArn',
    '/GetInfrastructureConfiguration#infrastructureConfigurationArn',
    keyArgs,
  ] as const
}

export function useGetGetInfrastructureConfigurationInfrastructureConfigurationArn<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
              >
            >
          >
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
        ? getGetGetInfrastructureConfigurationInfrastructureConfigurationArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['GetInfrastructureConfiguration#infrastructureConfigurationArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetInfrastructureConfigurationInfrastructureConfigurationArn<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
              >
            >
          >
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
        ? getGetGetInfrastructureConfigurationInfrastructureConfigurationArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['GetInfrastructureConfiguration#infrastructureConfigurationArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGetWorkflowExecutionWorkflowExecutionIdKey(
  args: InferRequestType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetWorkflowExecution#workflowExecutionId',
    '/GetWorkflowExecution#workflowExecutionId',
    keyArgs,
  ] as const
}

export function useGetGetWorkflowExecutionWorkflowExecutionId<TError = unknown>(
  args: InferRequestType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>>
          >
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
        ? getGetGetWorkflowExecutionWorkflowExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetWorkflowExecution#workflowExecutionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetWorkflowExecutionWorkflowExecutionId<TError = unknown>(
  args: InferRequestType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>>
          >
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
        ? getGetGetWorkflowExecutionWorkflowExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetWorkflowExecution#workflowExecutionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetWorkflowStepExecutionStepExecutionIdKey(
  args: InferRequestType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetWorkflowStepExecution#stepExecutionId',
    '/GetWorkflowStepExecution#stepExecutionId',
    keyArgs,
  ] as const
}

export function useGetGetWorkflowStepExecutionStepExecutionId<TError = unknown>(
  args: InferRequestType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>>
          >
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
        ? getGetGetWorkflowStepExecutionStepExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetWorkflowStepExecution#stepExecutionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetWorkflowStepExecutionStepExecutionId<TError = unknown>(
  args: InferRequestType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>>
          >
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
        ? getGetGetWorkflowStepExecutionStepExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['GetWorkflowStepExecution#stepExecutionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutImportComponentKey() {
  return ['ImportComponent', '/ImportComponent', 'PUT'] as const
}

export function usePutImportComponent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ImportComponent.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ImportComponent.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutImportComponentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ImportComponent.$put> }) =>
        parseResponse(client.ImportComponent.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutImportVmImageKey() {
  return ['ImportVmImage', '/ImportVmImage', 'PUT'] as const
}

export function usePutImportVmImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ImportVmImage.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ImportVmImage.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutImportVmImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ImportVmImage.$put> }) =>
        parseResponse(client.ImportVmImage.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListComponentBuildVersionsKey() {
  return ['ListComponentBuildVersions', '/ListComponentBuildVersions', 'POST'] as const
}

export function usePostListComponentBuildVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListComponentBuildVersions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListComponentBuildVersions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListComponentBuildVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListComponentBuildVersions.$post> },
      ) => parseResponse(client.ListComponentBuildVersions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListComponentsKey() {
  return ['ListComponents', '/ListComponents', 'POST'] as const
}

export function usePostListComponents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListComponents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListComponents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListComponentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListComponents.$post> }) =>
        parseResponse(client.ListComponents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListContainerRecipesKey() {
  return ['ListContainerRecipes', '/ListContainerRecipes', 'POST'] as const
}

export function usePostListContainerRecipes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListContainerRecipes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListContainerRecipes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListContainerRecipesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListContainerRecipes.$post> },
      ) => parseResponse(client.ListContainerRecipes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListDistributionConfigurationsKey() {
  return ['ListDistributionConfigurations', '/ListDistributionConfigurations', 'POST'] as const
}

export function usePostListDistributionConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ListDistributionConfigurations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListDistributionConfigurations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListDistributionConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListDistributionConfigurations.$post> },
      ) => parseResponse(client.ListDistributionConfigurations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListImageBuildVersionsKey() {
  return ['ListImageBuildVersions', '/ListImageBuildVersions', 'POST'] as const
}

export function usePostListImageBuildVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListImageBuildVersions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListImageBuildVersions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListImageBuildVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListImageBuildVersions.$post> },
      ) => parseResponse(client.ListImageBuildVersions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListImagePackagesKey() {
  return ['ListImagePackages', '/ListImagePackages', 'POST'] as const
}

export function usePostListImagePackages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImagePackages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListImagePackages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListImagePackagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListImagePackages.$post> }) =>
        parseResponse(client.ListImagePackages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListImagePipelineImagesKey() {
  return ['ListImagePipelineImages', '/ListImagePipelineImages', 'POST'] as const
}

export function usePostListImagePipelineImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListImagePipelineImages.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListImagePipelineImages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListImagePipelineImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListImagePipelineImages.$post> },
      ) => parseResponse(client.ListImagePipelineImages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListImagePipelinesKey() {
  return ['ListImagePipelines', '/ListImagePipelines', 'POST'] as const
}

export function usePostListImagePipelines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImagePipelines.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListImagePipelines.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListImagePipelinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListImagePipelines.$post> }) =>
        parseResponse(client.ListImagePipelines.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListImageRecipesKey() {
  return ['ListImageRecipes', '/ListImageRecipes', 'POST'] as const
}

export function usePostListImageRecipes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImageRecipes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListImageRecipes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListImageRecipesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListImageRecipes.$post> }) =>
        parseResponse(client.ListImageRecipes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListImageScanFindingAggregationsKey() {
  return ['ListImageScanFindingAggregations', '/ListImageScanFindingAggregations', 'POST'] as const
}

export function usePostListImageScanFindingAggregations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ListImageScanFindingAggregations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListImageScanFindingAggregations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListImageScanFindingAggregationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListImageScanFindingAggregations.$post> },
      ) => parseResponse(client.ListImageScanFindingAggregations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListImageScanFindingsKey() {
  return ['ListImageScanFindings', '/ListImageScanFindings', 'POST'] as const
}

export function usePostListImageScanFindings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListImageScanFindings.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListImageScanFindings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListImageScanFindingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListImageScanFindings.$post> },
      ) => parseResponse(client.ListImageScanFindings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListImagesKey() {
  return ['ListImages', '/ListImages', 'POST'] as const
}

export function usePostListImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImages.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ListImages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListImages.$post> }) =>
        parseResponse(client.ListImages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListInfrastructureConfigurationsKey() {
  return ['ListInfrastructureConfigurations', '/ListInfrastructureConfigurations', 'POST'] as const
}

export function usePostListInfrastructureConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ListInfrastructureConfigurations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListInfrastructureConfigurations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListInfrastructureConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListInfrastructureConfigurations.$post> },
      ) => parseResponse(client.ListInfrastructureConfigurations.$post(arg, clientOptions)),
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

export function getPostListWorkflowExecutionsKey() {
  return ['ListWorkflowExecutions', '/ListWorkflowExecutions', 'POST'] as const
}

export function usePostListWorkflowExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListWorkflowExecutions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListWorkflowExecutions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListWorkflowExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListWorkflowExecutions.$post> },
      ) => parseResponse(client.ListWorkflowExecutions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListWorkflowStepExecutionsKey() {
  return ['ListWorkflowStepExecutions', '/ListWorkflowStepExecutions', 'POST'] as const
}

export function usePostListWorkflowStepExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListWorkflowStepExecutions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListWorkflowStepExecutions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListWorkflowStepExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListWorkflowStepExecutions.$post> },
      ) => parseResponse(client.ListWorkflowStepExecutions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPutComponentPolicyKey() {
  return ['PutComponentPolicy', '/PutComponentPolicy', 'PUT'] as const
}

export function usePutPutComponentPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutComponentPolicy.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PutComponentPolicy.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPutComponentPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PutComponentPolicy.$put> }) =>
        parseResponse(client.PutComponentPolicy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPutContainerRecipePolicyKey() {
  return ['PutContainerRecipePolicy', '/PutContainerRecipePolicy', 'PUT'] as const
}

export function usePutPutContainerRecipePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.PutContainerRecipePolicy.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.PutContainerRecipePolicy.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPutContainerRecipePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.PutContainerRecipePolicy.$put> },
      ) => parseResponse(client.PutContainerRecipePolicy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPutImagePolicyKey() {
  return ['PutImagePolicy', '/PutImagePolicy', 'PUT'] as const
}

export function usePutPutImagePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutImagePolicy.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PutImagePolicy.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPutImagePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PutImagePolicy.$put> }) =>
        parseResponse(client.PutImagePolicy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPutImageRecipePolicyKey() {
  return ['PutImageRecipePolicy', '/PutImageRecipePolicy', 'PUT'] as const
}

export function usePutPutImageRecipePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutImageRecipePolicy.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PutImageRecipePolicy.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPutImageRecipePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PutImageRecipePolicy.$put> }) =>
        parseResponse(client.PutImageRecipePolicy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutStartImagePipelineExecutionKey() {
  return ['StartImagePipelineExecution', '/StartImagePipelineExecution', 'PUT'] as const
}

export function usePutStartImagePipelineExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.StartImagePipelineExecution.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.StartImagePipelineExecution.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStartImagePipelineExecutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.StartImagePipelineExecution.$put> },
      ) => parseResponse(client.StartImagePipelineExecution.$put(arg, clientOptions)),
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

export function getPutUpdateDistributionConfigurationKey() {
  return ['UpdateDistributionConfiguration', '/UpdateDistributionConfiguration', 'PUT'] as const
}

export function usePutUpdateDistributionConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateDistributionConfiguration.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateDistributionConfiguration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUpdateDistributionConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.UpdateDistributionConfiguration.$put> },
      ) => parseResponse(client.UpdateDistributionConfiguration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUpdateImagePipelineKey() {
  return ['UpdateImagePipeline', '/UpdateImagePipeline', 'PUT'] as const
}

export function usePutUpdateImagePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateImagePipeline.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateImagePipeline.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUpdateImagePipelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateImagePipeline.$put> }) =>
        parseResponse(client.UpdateImagePipeline.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUpdateInfrastructureConfigurationKey() {
  return ['UpdateInfrastructureConfiguration', '/UpdateInfrastructureConfiguration', 'PUT'] as const
}

export function usePutUpdateInfrastructureConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateInfrastructureConfiguration.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateInfrastructureConfiguration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUpdateInfrastructureConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.UpdateInfrastructureConfiguration.$put> },
      ) => parseResponse(client.UpdateInfrastructureConfiguration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
