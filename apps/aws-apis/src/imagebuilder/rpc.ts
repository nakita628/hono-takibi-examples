import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putCancelImageCreation(
  args: InferRequestType<typeof client.CancelImageCreation.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CancelImageCreation.$put(args, options))
}

export async function putCreateComponent(
  args: InferRequestType<typeof client.CreateComponent.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateComponent.$put(args, options))
}

export async function putCreateContainerRecipe(
  args: InferRequestType<typeof client.CreateContainerRecipe.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateContainerRecipe.$put(args, options))
}

export async function putCreateDistributionConfiguration(
  args: InferRequestType<typeof client.CreateDistributionConfiguration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateDistributionConfiguration.$put(args, options))
}

export async function putCreateImage(
  args: InferRequestType<typeof client.CreateImage.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateImage.$put(args, options))
}

export async function putCreateImagePipeline(
  args: InferRequestType<typeof client.CreateImagePipeline.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateImagePipeline.$put(args, options))
}

export async function putCreateImageRecipe(
  args: InferRequestType<typeof client.CreateImageRecipe.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateImageRecipe.$put(args, options))
}

export async function putCreateInfrastructureConfiguration(
  args: InferRequestType<typeof client.CreateInfrastructureConfiguration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.CreateInfrastructureConfiguration.$put(args, options))
}

export async function deleteDeleteComponentComponentBuildVersionArn(
  args: InferRequestType<(typeof client)['DeleteComponent#componentBuildVersionArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['DeleteComponent#componentBuildVersionArn'].$delete(args, options),
  )
}

export async function deleteDeleteContainerRecipeContainerRecipeArn(
  args: InferRequestType<(typeof client)['DeleteContainerRecipe#containerRecipeArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['DeleteContainerRecipe#containerRecipeArn'].$delete(args, options),
  )
}

export async function deleteDeleteDistributionConfigurationDistributionConfigurationArn(
  args: InferRequestType<
    (typeof client)['DeleteDistributionConfiguration#distributionConfigurationArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['DeleteDistributionConfiguration#distributionConfigurationArn'].$delete(args, options),
  )
}

export async function deleteDeleteImageImageBuildVersionArn(
  args: InferRequestType<(typeof client)['DeleteImage#imageBuildVersionArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['DeleteImage#imageBuildVersionArn'].$delete(args, options))
}

export async function deleteDeleteImagePipelineImagePipelineArn(
  args: InferRequestType<(typeof client)['DeleteImagePipeline#imagePipelineArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['DeleteImagePipeline#imagePipelineArn'].$delete(args, options))
}

export async function deleteDeleteImageRecipeImageRecipeArn(
  args: InferRequestType<(typeof client)['DeleteImageRecipe#imageRecipeArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['DeleteImageRecipe#imageRecipeArn'].$delete(args, options))
}

export async function deleteDeleteInfrastructureConfigurationInfrastructureConfigurationArn(
  args: InferRequestType<
    (typeof client)['DeleteInfrastructureConfiguration#infrastructureConfigurationArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['DeleteInfrastructureConfiguration#infrastructureConfigurationArn'].$delete(
      args,
      options,
    ),
  )
}

export async function getGetComponentComponentBuildVersionArn(
  args: InferRequestType<(typeof client)['GetComponent#componentBuildVersionArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetComponent#componentBuildVersionArn'].$get(args, options))
}

export async function getGetComponentPolicyComponentArn(
  args: InferRequestType<(typeof client)['GetComponentPolicy#componentArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetComponentPolicy#componentArn'].$get(args, options))
}

export async function getGetContainerRecipeContainerRecipeArn(
  args: InferRequestType<(typeof client)['GetContainerRecipe#containerRecipeArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetContainerRecipe#containerRecipeArn'].$get(args, options))
}

export async function getGetContainerRecipePolicyContainerRecipeArn(
  args: InferRequestType<(typeof client)['GetContainerRecipePolicy#containerRecipeArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['GetContainerRecipePolicy#containerRecipeArn'].$get(args, options),
  )
}

export async function getGetDistributionConfigurationDistributionConfigurationArn(
  args: InferRequestType<
    (typeof client)['GetDistributionConfiguration#distributionConfigurationArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['GetDistributionConfiguration#distributionConfigurationArn'].$get(args, options),
  )
}

export async function getGetImageImageBuildVersionArn(
  args: InferRequestType<(typeof client)['GetImage#imageBuildVersionArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetImage#imageBuildVersionArn'].$get(args, options))
}

export async function getGetImagePipelineImagePipelineArn(
  args: InferRequestType<(typeof client)['GetImagePipeline#imagePipelineArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetImagePipeline#imagePipelineArn'].$get(args, options))
}

export async function getGetImagePolicyImageArn(
  args: InferRequestType<(typeof client)['GetImagePolicy#imageArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetImagePolicy#imageArn'].$get(args, options))
}

export async function getGetImageRecipeImageRecipeArn(
  args: InferRequestType<(typeof client)['GetImageRecipe#imageRecipeArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetImageRecipe#imageRecipeArn'].$get(args, options))
}

export async function getGetImageRecipePolicyImageRecipeArn(
  args: InferRequestType<(typeof client)['GetImageRecipePolicy#imageRecipeArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetImageRecipePolicy#imageRecipeArn'].$get(args, options))
}

export async function getGetInfrastructureConfigurationInfrastructureConfigurationArn(
  args: InferRequestType<
    (typeof client)['GetInfrastructureConfiguration#infrastructureConfigurationArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['GetInfrastructureConfiguration#infrastructureConfigurationArn'].$get(args, options),
  )
}

export async function getGetWorkflowExecutionWorkflowExecutionId(
  args: InferRequestType<(typeof client)['GetWorkflowExecution#workflowExecutionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetWorkflowExecution#workflowExecutionId'].$get(args, options))
}

export async function getGetWorkflowStepExecutionStepExecutionId(
  args: InferRequestType<(typeof client)['GetWorkflowStepExecution#stepExecutionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['GetWorkflowStepExecution#stepExecutionId'].$get(args, options))
}

export async function putImportComponent(
  args: InferRequestType<typeof client.ImportComponent.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ImportComponent.$put(args, options))
}

export async function putImportVmImage(
  args: InferRequestType<typeof client.ImportVmImage.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ImportVmImage.$put(args, options))
}

export async function postListComponentBuildVersions(
  args: InferRequestType<typeof client.ListComponentBuildVersions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListComponentBuildVersions.$post(args, options))
}

export async function postListComponents(
  args: InferRequestType<typeof client.ListComponents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListComponents.$post(args, options))
}

export async function postListContainerRecipes(
  args: InferRequestType<typeof client.ListContainerRecipes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListContainerRecipes.$post(args, options))
}

export async function postListDistributionConfigurations(
  args: InferRequestType<typeof client.ListDistributionConfigurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListDistributionConfigurations.$post(args, options))
}

export async function postListImageBuildVersions(
  args: InferRequestType<typeof client.ListImageBuildVersions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListImageBuildVersions.$post(args, options))
}

export async function postListImagePackages(
  args: InferRequestType<typeof client.ListImagePackages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListImagePackages.$post(args, options))
}

export async function postListImagePipelineImages(
  args: InferRequestType<typeof client.ListImagePipelineImages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListImagePipelineImages.$post(args, options))
}

export async function postListImagePipelines(
  args: InferRequestType<typeof client.ListImagePipelines.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListImagePipelines.$post(args, options))
}

export async function postListImageRecipes(
  args: InferRequestType<typeof client.ListImageRecipes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListImageRecipes.$post(args, options))
}

export async function postListImageScanFindingAggregations(
  args: InferRequestType<typeof client.ListImageScanFindingAggregations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListImageScanFindingAggregations.$post(args, options))
}

export async function postListImageScanFindings(
  args: InferRequestType<typeof client.ListImageScanFindings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListImageScanFindings.$post(args, options))
}

export async function postListImages(
  args: InferRequestType<typeof client.ListImages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListImages.$post(args, options))
}

export async function postListInfrastructureConfigurations(
  args: InferRequestType<typeof client.ListInfrastructureConfigurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListInfrastructureConfigurations.$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postListWorkflowExecutions(
  args: InferRequestType<typeof client.ListWorkflowExecutions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListWorkflowExecutions.$post(args, options))
}

export async function postListWorkflowStepExecutions(
  args: InferRequestType<typeof client.ListWorkflowStepExecutions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ListWorkflowStepExecutions.$post(args, options))
}

export async function putPutComponentPolicy(
  args: InferRequestType<typeof client.PutComponentPolicy.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutComponentPolicy.$put(args, options))
}

export async function putPutContainerRecipePolicy(
  args: InferRequestType<typeof client.PutContainerRecipePolicy.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutContainerRecipePolicy.$put(args, options))
}

export async function putPutImagePolicy(
  args: InferRequestType<typeof client.PutImagePolicy.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutImagePolicy.$put(args, options))
}

export async function putPutImageRecipePolicy(
  args: InferRequestType<typeof client.PutImageRecipePolicy.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.PutImageRecipePolicy.$put(args, options))
}

export async function putStartImagePipelineExecution(
  args: InferRequestType<typeof client.StartImagePipelineExecution.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StartImagePipelineExecution.$put(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function putUpdateDistributionConfiguration(
  args: InferRequestType<typeof client.UpdateDistributionConfiguration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateDistributionConfiguration.$put(args, options))
}

export async function putUpdateImagePipeline(
  args: InferRequestType<typeof client.UpdateImagePipeline.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateImagePipeline.$put(args, options))
}

export async function putUpdateInfrastructureConfiguration(
  args: InferRequestType<typeof client.UpdateInfrastructureConfiguration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateInfrastructureConfiguration.$put(args, options))
}
