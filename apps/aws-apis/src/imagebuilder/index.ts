import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cancelImageCreationHandler,
  createComponentHandler,
  createContainerRecipeHandler,
  createDistributionConfigurationHandler,
  createImageHandler,
  createImagePipelineHandler,
  createImageRecipeHandler,
  createInfrastructureConfigurationHandler,
  deleteComponentComponentBuildVersionArnHandler,
  deleteContainerRecipeContainerRecipeArnHandler,
  deleteDistributionConfigurationDistributionConfigurationArnHandler,
  deleteImageImageBuildVersionArnHandler,
  deleteImagePipelineImagePipelineArnHandler,
  deleteImageRecipeImageRecipeArnHandler,
  deleteInfrastructureConfigurationInfrastructureConfigurationArnHandler,
  getComponentComponentBuildVersionArnHandler,
  getComponentPolicyComponentArnHandler,
  getContainerRecipeContainerRecipeArnHandler,
  getContainerRecipePolicyContainerRecipeArnHandler,
  getDistributionConfigurationDistributionConfigurationArnHandler,
  getImageImageBuildVersionArnHandler,
  getImagePipelineImagePipelineArnHandler,
  getImagePolicyImageArnHandler,
  getImageRecipeImageRecipeArnHandler,
  getImageRecipePolicyImageRecipeArnHandler,
  getInfrastructureConfigurationInfrastructureConfigurationArnHandler,
  getWorkflowExecutionWorkflowExecutionIdHandler,
  getWorkflowStepExecutionStepExecutionIdHandler,
  importComponentHandler,
  importVmImageHandler,
  listComponentBuildVersionsHandler,
  listComponentsHandler,
  listContainerRecipesHandler,
  listDistributionConfigurationsHandler,
  listImageBuildVersionsHandler,
  listImagePackagesHandler,
  listImagePipelineImagesHandler,
  listImagePipelinesHandler,
  listImageRecipesHandler,
  listImageScanFindingAggregationsHandler,
  listImageScanFindingsHandler,
  listImagesHandler,
  listInfrastructureConfigurationsHandler,
  listWorkflowExecutionsHandler,
  listWorkflowStepExecutionsHandler,
  putComponentPolicyHandler,
  putContainerRecipePolicyHandler,
  putImagePolicyHandler,
  putImageRecipePolicyHandler,
  startImagePipelineExecutionHandler,
  tagsHandler,
  updateDistributionConfigurationHandler,
  updateImagePipelineHandler,
  updateInfrastructureConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cancelImageCreationHandler)
  .route('/', createComponentHandler)
  .route('/', createContainerRecipeHandler)
  .route('/', createDistributionConfigurationHandler)
  .route('/', createImageHandler)
  .route('/', createImagePipelineHandler)
  .route('/', createImageRecipeHandler)
  .route('/', createInfrastructureConfigurationHandler)
  .route('/', deleteComponentComponentBuildVersionArnHandler)
  .route('/', deleteContainerRecipeContainerRecipeArnHandler)
  .route('/', deleteDistributionConfigurationDistributionConfigurationArnHandler)
  .route('/', deleteImageImageBuildVersionArnHandler)
  .route('/', deleteImagePipelineImagePipelineArnHandler)
  .route('/', deleteImageRecipeImageRecipeArnHandler)
  .route('/', deleteInfrastructureConfigurationInfrastructureConfigurationArnHandler)
  .route('/', getComponentComponentBuildVersionArnHandler)
  .route('/', getComponentPolicyComponentArnHandler)
  .route('/', getContainerRecipeContainerRecipeArnHandler)
  .route('/', getContainerRecipePolicyContainerRecipeArnHandler)
  .route('/', getDistributionConfigurationDistributionConfigurationArnHandler)
  .route('/', getImageImageBuildVersionArnHandler)
  .route('/', getImagePipelineImagePipelineArnHandler)
  .route('/', getImagePolicyImageArnHandler)
  .route('/', getImageRecipeImageRecipeArnHandler)
  .route('/', getImageRecipePolicyImageRecipeArnHandler)
  .route('/', getInfrastructureConfigurationInfrastructureConfigurationArnHandler)
  .route('/', getWorkflowExecutionWorkflowExecutionIdHandler)
  .route('/', getWorkflowStepExecutionStepExecutionIdHandler)
  .route('/', importComponentHandler)
  .route('/', importVmImageHandler)
  .route('/', listComponentBuildVersionsHandler)
  .route('/', listComponentsHandler)
  .route('/', listContainerRecipesHandler)
  .route('/', listDistributionConfigurationsHandler)
  .route('/', listImageBuildVersionsHandler)
  .route('/', listImagePackagesHandler)
  .route('/', listImagePipelineImagesHandler)
  .route('/', listImagePipelinesHandler)
  .route('/', listImageRecipesHandler)
  .route('/', listImageScanFindingAggregationsHandler)
  .route('/', listImageScanFindingsHandler)
  .route('/', listImagesHandler)
  .route('/', listInfrastructureConfigurationsHandler)
  .route('/', tagsHandler)
  .route('/', listWorkflowExecutionsHandler)
  .route('/', listWorkflowStepExecutionsHandler)
  .route('/', putComponentPolicyHandler)
  .route('/', putContainerRecipePolicyHandler)
  .route('/', putImagePolicyHandler)
  .route('/', putImageRecipePolicyHandler)
  .route('/', startImagePipelineExecutionHandler)
  .route('/', updateDistributionConfigurationHandler)
  .route('/', updateImagePipelineHandler)
  .route('/', updateInfrastructureConfigurationHandler)

export default app
