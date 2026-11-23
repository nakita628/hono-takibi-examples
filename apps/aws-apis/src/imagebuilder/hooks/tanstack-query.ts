import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function getPutCancelImageCreationMutationKey() {
  return ['CancelImageCreation', '/CancelImageCreation', 'PUT'] as const
}

export function getPutCancelImageCreationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CancelImageCreation.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.CancelImageCreation.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCancelImageCreationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CancelImageCreation.$put>) {
      return parseResponse(client.CancelImageCreation.$put(args, options))
    },
  })
}

export function usePutCancelImageCreation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CancelImageCreation.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CancelImageCreation.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCancelImageCreationMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutCreateComponentMutationKey() {
  return ['CreateComponent', '/CreateComponent', 'PUT'] as const
}

export function getPutCreateComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateComponent.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.CreateComponent.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCreateComponentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateComponent.$put>) {
      return parseResponse(client.CreateComponent.$put(args, options))
    },
  })
}

export function usePutCreateComponent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateComponent.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.CreateComponent.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCreateComponentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutCreateContainerRecipeMutationKey() {
  return ['CreateContainerRecipe', '/CreateContainerRecipe', 'PUT'] as const
}

export function getPutCreateContainerRecipeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CreateContainerRecipe.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.CreateContainerRecipe.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCreateContainerRecipeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateContainerRecipe.$put>) {
      return parseResponse(client.CreateContainerRecipe.$put(args, options))
    },
  })
}

export function usePutCreateContainerRecipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CreateContainerRecipe.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CreateContainerRecipe.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCreateContainerRecipeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutCreateDistributionConfigurationMutationKey() {
  return ['CreateDistributionConfiguration', '/CreateDistributionConfiguration', 'PUT'] as const
}

export function getPutCreateDistributionConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.CreateDistributionConfiguration.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.CreateDistributionConfiguration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCreateDistributionConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateDistributionConfiguration.$put>) {
      return parseResponse(client.CreateDistributionConfiguration.$put(args, options))
    },
  })
}

export function usePutCreateDistributionConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.CreateDistributionConfiguration.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.CreateDistributionConfiguration.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCreateDistributionConfigurationMutationOptions<
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

export function getPutCreateImageMutationKey() {
  return ['CreateImage', '/CreateImage', 'PUT'] as const
}

export function getPutCreateImageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateImage.$put>>>>>,
    TError,
    InferRequestType<typeof client.CreateImage.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCreateImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateImage.$put>) {
      return parseResponse(client.CreateImage.$put(args, options))
    },
  })
}

export function usePutCreateImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateImage.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.CreateImage.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCreateImageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutCreateImagePipelineMutationKey() {
  return ['CreateImagePipeline', '/CreateImagePipeline', 'PUT'] as const
}

export function getPutCreateImagePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateImagePipeline.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.CreateImagePipeline.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCreateImagePipelineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateImagePipeline.$put>) {
      return parseResponse(client.CreateImagePipeline.$put(args, options))
    },
  })
}

export function usePutCreateImagePipeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CreateImagePipeline.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CreateImagePipeline.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCreateImagePipelineMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutCreateImageRecipeMutationKey() {
  return ['CreateImageRecipe', '/CreateImageRecipe', 'PUT'] as const
}

export function getPutCreateImageRecipeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateImageRecipe.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.CreateImageRecipe.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCreateImageRecipeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateImageRecipe.$put>) {
      return parseResponse(client.CreateImageRecipe.$put(args, options))
    },
  })
}

export function usePutCreateImageRecipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CreateImageRecipe.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CreateImageRecipe.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCreateImageRecipeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutCreateInfrastructureConfigurationMutationKey() {
  return ['CreateInfrastructureConfiguration', '/CreateInfrastructureConfiguration', 'PUT'] as const
}

export function getPutCreateInfrastructureConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.CreateInfrastructureConfiguration.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.CreateInfrastructureConfiguration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCreateInfrastructureConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateInfrastructureConfiguration.$put>) {
      return parseResponse(client.CreateInfrastructureConfiguration.$put(args, options))
    },
  })
}

export function usePutCreateInfrastructureConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.CreateInfrastructureConfiguration.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.CreateInfrastructureConfiguration.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCreateInfrastructureConfigurationMutationOptions<
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

export function getDeleteDeleteComponentComponentBuildVersionArnMutationKey() {
  return [
    'DeleteComponent#componentBuildVersionArn',
    '/DeleteComponent#componentBuildVersionArn',
    'DELETE',
  ] as const
}

export function getDeleteDeleteComponentComponentBuildVersionArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['DeleteComponent#componentBuildVersionArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeleteComponentComponentBuildVersionArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['DeleteComponent#componentBuildVersionArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['DeleteComponent#componentBuildVersionArn'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDeleteComponentComponentBuildVersionArn<
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
                ReturnType<(typeof client)['DeleteComponent#componentBuildVersionArn']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['DeleteComponent#componentBuildVersionArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeleteComponentComponentBuildVersionArnMutationOptions<
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

export function getDeleteDeleteContainerRecipeContainerRecipeArnMutationKey() {
  return [
    'DeleteContainerRecipe#containerRecipeArn',
    '/DeleteContainerRecipe#containerRecipeArn',
    'DELETE',
  ] as const
}

export function getDeleteDeleteContainerRecipeContainerRecipeArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['DeleteContainerRecipe#containerRecipeArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeleteContainerRecipeContainerRecipeArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['DeleteContainerRecipe#containerRecipeArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['DeleteContainerRecipe#containerRecipeArn'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDeleteContainerRecipeContainerRecipeArn<
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
                ReturnType<(typeof client)['DeleteContainerRecipe#containerRecipeArn']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['DeleteContainerRecipe#containerRecipeArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeleteContainerRecipeContainerRecipeArnMutationOptions<
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

export function getDeleteDeleteDistributionConfigurationDistributionConfigurationArnMutationKey() {
  return [
    'DeleteDistributionConfiguration#distributionConfigurationArn',
    '/DeleteDistributionConfiguration#distributionConfigurationArn',
    'DELETE',
  ] as const
}

export function getDeleteDeleteDistributionConfigurationDistributionConfigurationArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['DeleteDistributionConfiguration#distributionConfigurationArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeleteDistributionConfigurationDistributionConfigurationArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['DeleteDistributionConfiguration#distributionConfigurationArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['DeleteDistributionConfiguration#distributionConfigurationArn'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDeleteDistributionConfigurationDistributionConfigurationArn<
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
                  (typeof client)['DeleteDistributionConfiguration#distributionConfigurationArn']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['DeleteDistributionConfiguration#distributionConfigurationArn']['$delete']
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
    getDeleteDeleteDistributionConfigurationDistributionConfigurationArnMutationOptions<
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

export function getDeleteDeleteImageImageBuildVersionArnMutationKey() {
  return [
    'DeleteImage#imageBuildVersionArn',
    '/DeleteImage#imageBuildVersionArn',
    'DELETE',
  ] as const
}

export function getDeleteDeleteImageImageBuildVersionArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['DeleteImage#imageBuildVersionArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['DeleteImage#imageBuildVersionArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeleteImageImageBuildVersionArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['DeleteImage#imageBuildVersionArn']['$delete']>,
    ) {
      return parseResponse(client['DeleteImage#imageBuildVersionArn'].$delete(args, options))
    },
  })
}

export function useDeleteDeleteImageImageBuildVersionArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['DeleteImage#imageBuildVersionArn']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['DeleteImage#imageBuildVersionArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeleteImageImageBuildVersionArnMutationOptions<
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

export function getDeleteDeleteImagePipelineImagePipelineArnMutationKey() {
  return [
    'DeleteImagePipeline#imagePipelineArn',
    '/DeleteImagePipeline#imagePipelineArn',
    'DELETE',
  ] as const
}

export function getDeleteDeleteImagePipelineImagePipelineArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['DeleteImagePipeline#imagePipelineArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['DeleteImagePipeline#imagePipelineArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeleteImagePipelineImagePipelineArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['DeleteImagePipeline#imagePipelineArn']['$delete']>,
    ) {
      return parseResponse(client['DeleteImagePipeline#imagePipelineArn'].$delete(args, options))
    },
  })
}

export function useDeleteDeleteImagePipelineImagePipelineArn<
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
                ReturnType<(typeof client)['DeleteImagePipeline#imagePipelineArn']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['DeleteImagePipeline#imagePipelineArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeleteImagePipelineImagePipelineArnMutationOptions<
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

export function getDeleteDeleteImageRecipeImageRecipeArnMutationKey() {
  return [
    'DeleteImageRecipe#imageRecipeArn',
    '/DeleteImageRecipe#imageRecipeArn',
    'DELETE',
  ] as const
}

export function getDeleteDeleteImageRecipeImageRecipeArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['DeleteImageRecipe#imageRecipeArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['DeleteImageRecipe#imageRecipeArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeleteImageRecipeImageRecipeArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['DeleteImageRecipe#imageRecipeArn']['$delete']>,
    ) {
      return parseResponse(client['DeleteImageRecipe#imageRecipeArn'].$delete(args, options))
    },
  })
}

export function useDeleteDeleteImageRecipeImageRecipeArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['DeleteImageRecipe#imageRecipeArn']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['DeleteImageRecipe#imageRecipeArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeleteImageRecipeImageRecipeArnMutationOptions<
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

export function getDeleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnMutationKey() {
  return [
    'DeleteInfrastructureConfiguration#infrastructureConfigurationArn',
    '/DeleteInfrastructureConfiguration#infrastructureConfigurationArn',
    'DELETE',
  ] as const
}

export function getDeleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['DeleteInfrastructureConfiguration#infrastructureConfigurationArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['DeleteInfrastructureConfiguration#infrastructureConfigurationArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['DeleteInfrastructureConfiguration#infrastructureConfigurationArn'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDeleteInfrastructureConfigurationInfrastructureConfigurationArn<
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
                  (typeof client)['DeleteInfrastructureConfiguration#infrastructureConfigurationArn']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['DeleteInfrastructureConfiguration#infrastructureConfigurationArn']['$delete']
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
    getDeleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnMutationOptions<
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

export function getGetComponentComponentBuildVersionArnQueryKey(
  args: InferRequestType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetComponent#componentBuildVersionArn',
    '/GetComponent#componentBuildVersionArn',
    keyArgs,
  ] as const
}

export function getGetComponentComponentBuildVersionArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetComponentComponentBuildVersionArnQueryKey>
  >({
    queryKey: getGetComponentComponentBuildVersionArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetComponent#componentBuildVersionArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetComponentComponentBuildVersionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetComponentComponentBuildVersionArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetComponentComponentBuildVersionArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetComponentComponentBuildVersionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetComponentComponentBuildVersionArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetComponentComponentBuildVersionArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetComponentPolicyComponentArnQueryKey(
  args: InferRequestType<(typeof client)['GetComponentPolicy#componentArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['GetComponentPolicy#componentArn', '/GetComponentPolicy#componentArn', keyArgs] as const
}

export function getGetComponentPolicyComponentArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetComponentPolicy#componentArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetComponentPolicy#componentArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetComponentPolicy#componentArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetComponentPolicyComponentArnQueryKey>
  >({
    queryKey: getGetComponentPolicyComponentArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetComponentPolicy#componentArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetComponentPolicyComponentArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetComponentPolicy#componentArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetComponentPolicy#componentArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetComponentPolicy#componentArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetComponentPolicyComponentArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetComponentPolicyComponentArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetComponentPolicyComponentArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetComponentPolicy#componentArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetComponentPolicy#componentArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetComponentPolicy#componentArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetComponentPolicyComponentArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetComponentPolicyComponentArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetContainerRecipeContainerRecipeArnQueryKey(
  args: InferRequestType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetContainerRecipe#containerRecipeArn',
    '/GetContainerRecipe#containerRecipeArn',
    keyArgs,
  ] as const
}

export function getGetContainerRecipeContainerRecipeArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetContainerRecipeContainerRecipeArnQueryKey>
  >({
    queryKey: getGetContainerRecipeContainerRecipeArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetContainerRecipe#containerRecipeArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetContainerRecipeContainerRecipeArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetContainerRecipeContainerRecipeArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetContainerRecipeContainerRecipeArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetContainerRecipeContainerRecipeArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetContainerRecipeContainerRecipeArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetContainerRecipeContainerRecipeArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetContainerRecipePolicyContainerRecipeArnQueryKey(
  args: InferRequestType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetContainerRecipePolicy#containerRecipeArn',
    '/GetContainerRecipePolicy#containerRecipeArn',
    keyArgs,
  ] as const
}

export function getGetContainerRecipePolicyContainerRecipeArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetContainerRecipePolicyContainerRecipeArnQueryKey>
  >({
    queryKey: getGetContainerRecipePolicyContainerRecipeArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetContainerRecipePolicy#containerRecipeArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetContainerRecipePolicyContainerRecipeArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetContainerRecipePolicyContainerRecipeArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetContainerRecipePolicyContainerRecipeArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetContainerRecipePolicyContainerRecipeArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetContainerRecipePolicyContainerRecipeArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetContainerRecipePolicyContainerRecipeArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetDistributionConfigurationDistributionConfigurationArnQueryKey(
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

export function getGetDistributionConfigurationDistributionConfigurationArnQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGetDistributionConfigurationDistributionConfigurationArnQueryKey>
  >({
    queryKey: getGetDistributionConfigurationDistributionConfigurationArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetDistributionConfiguration#distributionConfigurationArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetDistributionConfigurationDistributionConfigurationArn<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGetDistributionConfigurationDistributionConfigurationArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetDistributionConfigurationDistributionConfigurationArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetDistributionConfigurationDistributionConfigurationArn<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGetDistributionConfigurationDistributionConfigurationArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetDistributionConfigurationDistributionConfigurationArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetImageImageBuildVersionArnQueryKey(
  args: InferRequestType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['GetImage#imageBuildVersionArn', '/GetImage#imageBuildVersionArn', keyArgs] as const
}

export function getGetImageImageBuildVersionArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetImageImageBuildVersionArnQueryKey>
  >({
    queryKey: getGetImageImageBuildVersionArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetImage#imageBuildVersionArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetImageImageBuildVersionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetImageImageBuildVersionArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetImageImageBuildVersionArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetImageImageBuildVersionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetImageImageBuildVersionArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetImageImageBuildVersionArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetImagePipelineImagePipelineArnQueryKey(
  args: InferRequestType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetImagePipeline#imagePipelineArn',
    '/GetImagePipeline#imagePipelineArn',
    keyArgs,
  ] as const
}

export function getGetImagePipelineImagePipelineArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetImagePipelineImagePipelineArnQueryKey>
  >({
    queryKey: getGetImagePipelineImagePipelineArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetImagePipeline#imagePipelineArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetImagePipelineImagePipelineArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetImagePipelineImagePipelineArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetImagePipelineImagePipelineArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetImagePipelineImagePipelineArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetImagePipelineImagePipelineArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetImagePipelineImagePipelineArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetImagePolicyImageArnQueryKey(
  args: InferRequestType<(typeof client)['GetImagePolicy#imageArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['GetImagePolicy#imageArn', '/GetImagePolicy#imageArn', keyArgs] as const
}

export function getGetImagePolicyImageArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['GetImagePolicy#imageArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImagePolicy#imageArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetImagePolicy#imageArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetImagePolicyImageArnQueryKey>
  >({
    queryKey: getGetImagePolicyImageArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetImagePolicy#imageArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetImagePolicyImageArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['GetImagePolicy#imageArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImagePolicy#imageArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetImagePolicy#imageArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetImagePolicyImageArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetImagePolicyImageArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetImagePolicyImageArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['GetImagePolicy#imageArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImagePolicy#imageArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetImagePolicy#imageArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetImagePolicyImageArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetImagePolicyImageArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetImageRecipeImageRecipeArnQueryKey(
  args: InferRequestType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['GetImageRecipe#imageRecipeArn', '/GetImageRecipe#imageRecipeArn', keyArgs] as const
}

export function getGetImageRecipeImageRecipeArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetImageRecipeImageRecipeArnQueryKey>
  >({
    queryKey: getGetImageRecipeImageRecipeArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetImageRecipe#imageRecipeArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetImageRecipeImageRecipeArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetImageRecipeImageRecipeArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetImageRecipeImageRecipeArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetImageRecipeImageRecipeArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetImageRecipeImageRecipeArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetImageRecipeImageRecipeArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetImageRecipePolicyImageRecipeArnQueryKey(
  args: InferRequestType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetImageRecipePolicy#imageRecipeArn',
    '/GetImageRecipePolicy#imageRecipeArn',
    keyArgs,
  ] as const
}

export function getGetImageRecipePolicyImageRecipeArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetImageRecipePolicyImageRecipeArnQueryKey>
  >({
    queryKey: getGetImageRecipePolicyImageRecipeArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetImageRecipePolicy#imageRecipeArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetImageRecipePolicyImageRecipeArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetImageRecipePolicyImageRecipeArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetImageRecipePolicyImageRecipeArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetImageRecipePolicyImageRecipeArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetImageRecipePolicyImageRecipeArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetImageRecipePolicyImageRecipeArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetInfrastructureConfigurationInfrastructureConfigurationArnQueryKey(
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

export function getGetInfrastructureConfigurationInfrastructureConfigurationArnQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGetInfrastructureConfigurationInfrastructureConfigurationArnQueryKey>
  >({
    queryKey: getGetInfrastructureConfigurationInfrastructureConfigurationArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetInfrastructureConfiguration#infrastructureConfigurationArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetInfrastructureConfigurationInfrastructureConfigurationArn<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGetInfrastructureConfigurationInfrastructureConfigurationArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetInfrastructureConfigurationInfrastructureConfigurationArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetInfrastructureConfigurationInfrastructureConfigurationArn<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getGetInfrastructureConfigurationInfrastructureConfigurationArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetInfrastructureConfigurationInfrastructureConfigurationArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetWorkflowExecutionWorkflowExecutionIdQueryKey(
  args: InferRequestType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetWorkflowExecution#workflowExecutionId',
    '/GetWorkflowExecution#workflowExecutionId',
    keyArgs,
  ] as const
}

export function getGetWorkflowExecutionWorkflowExecutionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetWorkflowExecutionWorkflowExecutionIdQueryKey>
  >({
    queryKey: getGetWorkflowExecutionWorkflowExecutionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetWorkflowExecution#workflowExecutionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetWorkflowExecutionWorkflowExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetWorkflowExecutionWorkflowExecutionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetWorkflowExecutionWorkflowExecutionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetWorkflowExecutionWorkflowExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetWorkflowExecutionWorkflowExecutionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetWorkflowExecutionWorkflowExecutionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetWorkflowStepExecutionStepExecutionIdQueryKey(
  args: InferRequestType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'GetWorkflowStepExecution#stepExecutionId',
    '/GetWorkflowStepExecution#stepExecutionId',
    keyArgs,
  ] as const
}

export function getGetWorkflowStepExecutionStepExecutionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetWorkflowStepExecutionStepExecutionIdQueryKey>
  >({
    queryKey: getGetWorkflowStepExecutionStepExecutionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['GetWorkflowStepExecution#stepExecutionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetWorkflowStepExecutionStepExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetWorkflowStepExecutionStepExecutionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetWorkflowStepExecutionStepExecutionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetWorkflowStepExecutionStepExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetWorkflowStepExecutionStepExecutionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetWorkflowStepExecutionStepExecutionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutImportComponentMutationKey() {
  return ['ImportComponent', '/ImportComponent', 'PUT'] as const
}

export function getPutImportComponentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ImportComponent.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.ImportComponent.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutImportComponentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ImportComponent.$put>) {
      return parseResponse(client.ImportComponent.$put(args, options))
    },
  })
}

export function usePutImportComponent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ImportComponent.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.ImportComponent.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutImportComponentMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutImportVmImageMutationKey() {
  return ['ImportVmImage', '/ImportVmImage', 'PUT'] as const
}

export function getPutImportVmImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ImportVmImage.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.ImportVmImage.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutImportVmImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ImportVmImage.$put>) {
      return parseResponse(client.ImportVmImage.$put(args, options))
    },
  })
}

export function usePutImportVmImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ImportVmImage.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.ImportVmImage.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutImportVmImageMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListComponentBuildVersionsMutationKey() {
  return ['ListComponentBuildVersions', '/ListComponentBuildVersions', 'POST'] as const
}

export function getPostListComponentBuildVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListComponentBuildVersions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListComponentBuildVersions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListComponentBuildVersionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListComponentBuildVersions.$post>) {
      return parseResponse(client.ListComponentBuildVersions.$post(args, options))
    },
  })
}

export function usePostListComponentBuildVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ListComponentBuildVersions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ListComponentBuildVersions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListComponentBuildVersionsMutationOptions<
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

export function getPostListComponentsMutationKey() {
  return ['ListComponents', '/ListComponents', 'POST'] as const
}

export function getPostListComponentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListComponents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListComponents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListComponentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListComponents.$post>) {
      return parseResponse(client.ListComponents.$post(args, options))
    },
  })
}

export function usePostListComponents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListComponents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListComponents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListComponentsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListContainerRecipesMutationKey() {
  return ['ListContainerRecipes', '/ListContainerRecipes', 'POST'] as const
}

export function getPostListContainerRecipesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListContainerRecipes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListContainerRecipes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListContainerRecipesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListContainerRecipes.$post>) {
      return parseResponse(client.ListContainerRecipes.$post(args, options))
    },
  })
}

export function usePostListContainerRecipes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListContainerRecipes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListContainerRecipes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListContainerRecipesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListDistributionConfigurationsMutationKey() {
  return ['ListDistributionConfigurations', '/ListDistributionConfigurations', 'POST'] as const
}

export function getPostListDistributionConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ListDistributionConfigurations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ListDistributionConfigurations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListDistributionConfigurationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListDistributionConfigurations.$post>) {
      return parseResponse(client.ListDistributionConfigurations.$post(args, options))
    },
  })
}

export function usePostListDistributionConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ListDistributionConfigurations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ListDistributionConfigurations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListDistributionConfigurationsMutationOptions<
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

export function getPostListImageBuildVersionsMutationKey() {
  return ['ListImageBuildVersions', '/ListImageBuildVersions', 'POST'] as const
}

export function getPostListImageBuildVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListImageBuildVersions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListImageBuildVersions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListImageBuildVersionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListImageBuildVersions.$post>) {
      return parseResponse(client.ListImageBuildVersions.$post(args, options))
    },
  })
}

export function usePostListImageBuildVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListImageBuildVersions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListImageBuildVersions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListImageBuildVersionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListImagePackagesMutationKey() {
  return ['ListImagePackages', '/ListImagePackages', 'POST'] as const
}

export function getPostListImagePackagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImagePackages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListImagePackages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListImagePackagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListImagePackages.$post>) {
      return parseResponse(client.ListImagePackages.$post(args, options))
    },
  })
}

export function usePostListImagePackages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListImagePackages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListImagePackages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListImagePackagesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListImagePipelineImagesMutationKey() {
  return ['ListImagePipelineImages', '/ListImagePipelineImages', 'POST'] as const
}

export function getPostListImagePipelineImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListImagePipelineImages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListImagePipelineImages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListImagePipelineImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListImagePipelineImages.$post>) {
      return parseResponse(client.ListImagePipelineImages.$post(args, options))
    },
  })
}

export function usePostListImagePipelineImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListImagePipelineImages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListImagePipelineImages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListImagePipelineImagesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListImagePipelinesMutationKey() {
  return ['ListImagePipelines', '/ListImagePipelines', 'POST'] as const
}

export function getPostListImagePipelinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImagePipelines.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListImagePipelines.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListImagePipelinesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListImagePipelines.$post>) {
      return parseResponse(client.ListImagePipelines.$post(args, options))
    },
  })
}

export function usePostListImagePipelines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListImagePipelines.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListImagePipelines.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListImagePipelinesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListImageRecipesMutationKey() {
  return ['ListImageRecipes', '/ListImageRecipes', 'POST'] as const
}

export function getPostListImageRecipesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImageRecipes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListImageRecipes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListImageRecipesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListImageRecipes.$post>) {
      return parseResponse(client.ListImageRecipes.$post(args, options))
    },
  })
}

export function usePostListImageRecipes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListImageRecipes.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListImageRecipes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListImageRecipesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListImageScanFindingAggregationsMutationKey() {
  return ['ListImageScanFindingAggregations', '/ListImageScanFindingAggregations', 'POST'] as const
}

export function getPostListImageScanFindingAggregationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ListImageScanFindingAggregations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ListImageScanFindingAggregations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListImageScanFindingAggregationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListImageScanFindingAggregations.$post>) {
      return parseResponse(client.ListImageScanFindingAggregations.$post(args, options))
    },
  })
}

export function usePostListImageScanFindingAggregations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ListImageScanFindingAggregations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ListImageScanFindingAggregations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListImageScanFindingAggregationsMutationOptions<
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

export function getPostListImageScanFindingsMutationKey() {
  return ['ListImageScanFindings', '/ListImageScanFindings', 'POST'] as const
}

export function getPostListImageScanFindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListImageScanFindings.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListImageScanFindings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListImageScanFindingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListImageScanFindings.$post>) {
      return parseResponse(client.ListImageScanFindings.$post(args, options))
    },
  })
}

export function usePostListImageScanFindings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListImageScanFindings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListImageScanFindings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListImageScanFindingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListImagesMutationKey() {
  return ['ListImages', '/ListImages', 'POST'] as const
}

export function getPostListImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImages.$post>>>>>,
    TError,
    InferRequestType<typeof client.ListImages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListImages.$post>) {
      return parseResponse(client.ListImages.$post(args, options))
    },
  })
}

export function usePostListImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListImages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListInfrastructureConfigurationsMutationKey() {
  return ['ListInfrastructureConfigurations', '/ListInfrastructureConfigurations', 'POST'] as const
}

export function getPostListInfrastructureConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ListInfrastructureConfigurations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ListInfrastructureConfigurations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListInfrastructureConfigurationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListInfrastructureConfigurations.$post>) {
      return parseResponse(client.ListInfrastructureConfigurations.$post(args, options))
    },
  })
}

export function usePostListInfrastructureConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ListInfrastructureConfigurations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ListInfrastructureConfigurations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListInfrastructureConfigurationsMutationOptions<
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

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListWorkflowExecutionsMutationKey() {
  return ['ListWorkflowExecutions', '/ListWorkflowExecutions', 'POST'] as const
}

export function getPostListWorkflowExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListWorkflowExecutions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListWorkflowExecutions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListWorkflowExecutionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListWorkflowExecutions.$post>) {
      return parseResponse(client.ListWorkflowExecutions.$post(args, options))
    },
  })
}

export function usePostListWorkflowExecutions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListWorkflowExecutions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListWorkflowExecutions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListWorkflowExecutionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListWorkflowStepExecutionsMutationKey() {
  return ['ListWorkflowStepExecutions', '/ListWorkflowStepExecutions', 'POST'] as const
}

export function getPostListWorkflowStepExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListWorkflowStepExecutions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListWorkflowStepExecutions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListWorkflowStepExecutionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListWorkflowStepExecutions.$post>) {
      return parseResponse(client.ListWorkflowStepExecutions.$post(args, options))
    },
  })
}

export function usePostListWorkflowStepExecutions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ListWorkflowStepExecutions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ListWorkflowStepExecutions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListWorkflowStepExecutionsMutationOptions<
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

export function getPutPutComponentPolicyMutationKey() {
  return ['PutComponentPolicy', '/PutComponentPolicy', 'PUT'] as const
}

export function getPutPutComponentPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutComponentPolicy.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.PutComponentPolicy.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPutComponentPolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutComponentPolicy.$put>) {
      return parseResponse(client.PutComponentPolicy.$put(args, options))
    },
  })
}

export function usePutPutComponentPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.PutComponentPolicy.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.PutComponentPolicy.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPutComponentPolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutPutContainerRecipePolicyMutationKey() {
  return ['PutContainerRecipePolicy', '/PutContainerRecipePolicy', 'PUT'] as const
}

export function getPutPutContainerRecipePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.PutContainerRecipePolicy.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.PutContainerRecipePolicy.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPutContainerRecipePolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutContainerRecipePolicy.$put>) {
      return parseResponse(client.PutContainerRecipePolicy.$put(args, options))
    },
  })
}

export function usePutPutContainerRecipePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.PutContainerRecipePolicy.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.PutContainerRecipePolicy.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPutContainerRecipePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutPutImagePolicyMutationKey() {
  return ['PutImagePolicy', '/PutImagePolicy', 'PUT'] as const
}

export function getPutPutImagePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutImagePolicy.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.PutImagePolicy.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPutImagePolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutImagePolicy.$put>) {
      return parseResponse(client.PutImagePolicy.$put(args, options))
    },
  })
}

export function usePutPutImagePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutImagePolicy.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.PutImagePolicy.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPutImagePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutPutImageRecipePolicyMutationKey() {
  return ['PutImageRecipePolicy', '/PutImageRecipePolicy', 'PUT'] as const
}

export function getPutPutImageRecipePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutImageRecipePolicy.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.PutImageRecipePolicy.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPutImageRecipePolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutImageRecipePolicy.$put>) {
      return parseResponse(client.PutImageRecipePolicy.$put(args, options))
    },
  })
}

export function usePutPutImageRecipePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.PutImageRecipePolicy.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.PutImageRecipePolicy.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPutImageRecipePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutStartImagePipelineExecutionMutationKey() {
  return ['StartImagePipelineExecution', '/StartImagePipelineExecution', 'PUT'] as const
}

export function getPutStartImagePipelineExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.StartImagePipelineExecution.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.StartImagePipelineExecution.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutStartImagePipelineExecutionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StartImagePipelineExecution.$put>) {
      return parseResponse(client.StartImagePipelineExecution.$put(args, options))
    },
  })
}

export function usePutStartImagePipelineExecution<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.StartImagePipelineExecution.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.StartImagePipelineExecution.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutStartImagePipelineExecutionMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUpdateDistributionConfigurationMutationKey() {
  return ['UpdateDistributionConfiguration', '/UpdateDistributionConfiguration', 'PUT'] as const
}

export function getPutUpdateDistributionConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateDistributionConfiguration.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.UpdateDistributionConfiguration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUpdateDistributionConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateDistributionConfiguration.$put>) {
      return parseResponse(client.UpdateDistributionConfiguration.$put(args, options))
    },
  })
}

export function usePutUpdateDistributionConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.UpdateDistributionConfiguration.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateDistributionConfiguration.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUpdateDistributionConfigurationMutationOptions<
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

export function getPutUpdateImagePipelineMutationKey() {
  return ['UpdateImagePipeline', '/UpdateImagePipeline', 'PUT'] as const
}

export function getPutUpdateImagePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateImagePipeline.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.UpdateImagePipeline.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUpdateImagePipelineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateImagePipeline.$put>) {
      return parseResponse(client.UpdateImagePipeline.$put(args, options))
    },
  })
}

export function usePutUpdateImagePipeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.UpdateImagePipeline.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateImagePipeline.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUpdateImagePipelineMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUpdateInfrastructureConfigurationMutationKey() {
  return ['UpdateInfrastructureConfiguration', '/UpdateInfrastructureConfiguration', 'PUT'] as const
}

export function getPutUpdateInfrastructureConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateInfrastructureConfiguration.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.UpdateInfrastructureConfiguration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUpdateInfrastructureConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateInfrastructureConfiguration.$put>) {
      return parseResponse(client.UpdateInfrastructureConfiguration.$put(args, options))
    },
  })
}

export function usePutUpdateInfrastructureConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.UpdateInfrastructureConfiguration.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateInfrastructureConfiguration.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUpdateInfrastructureConfigurationMutationOptions<
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
