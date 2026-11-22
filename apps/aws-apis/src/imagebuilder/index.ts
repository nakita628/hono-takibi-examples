import { OpenAPIHono } from '@hono/zod-openapi'
import {
  CancelImageCreationHandler,
  CreateComponentHandler,
  CreateContainerRecipeHandler,
  CreateDistributionConfigurationHandler,
  CreateImageHandler,
  CreateImagePipelineHandler,
  CreateImageRecipeHandler,
  CreateInfrastructureConfigurationHandler,
  DeleteComponentComponentBuildVersionArnHandler,
  DeleteContainerRecipeContainerRecipeArnHandler,
  DeleteDistributionConfigurationDistributionConfigurationArnHandler,
  DeleteImageImageBuildVersionArnHandler,
  DeleteImagePipelineImagePipelineArnHandler,
  DeleteImageRecipeImageRecipeArnHandler,
  DeleteInfrastructureConfigurationInfrastructureConfigurationArnHandler,
  GetComponentComponentBuildVersionArnHandler,
  GetComponentPolicyComponentArnHandler,
  GetContainerRecipeContainerRecipeArnHandler,
  GetContainerRecipePolicyContainerRecipeArnHandler,
  GetDistributionConfigurationDistributionConfigurationArnHandler,
  GetImageImageBuildVersionArnHandler,
  GetImagePipelineImagePipelineArnHandler,
  GetImagePolicyImageArnHandler,
  GetImageRecipeImageRecipeArnHandler,
  GetImageRecipePolicyImageRecipeArnHandler,
  GetInfrastructureConfigurationInfrastructureConfigurationArnHandler,
  GetWorkflowExecutionWorkflowExecutionIdHandler,
  GetWorkflowStepExecutionStepExecutionIdHandler,
  ImportComponentHandler,
  ImportVmImageHandler,
  ListComponentBuildVersionsHandler,
  ListComponentsHandler,
  ListContainerRecipesHandler,
  ListDistributionConfigurationsHandler,
  ListImageBuildVersionsHandler,
  ListImagePackagesHandler,
  ListImagePipelineImagesHandler,
  ListImagePipelinesHandler,
  ListImageRecipesHandler,
  ListImageScanFindingAggregationsHandler,
  ListImageScanFindingsHandler,
  ListImagesHandler,
  ListInfrastructureConfigurationsHandler,
  ListWorkflowExecutionsHandler,
  ListWorkflowStepExecutionsHandler,
  PutComponentPolicyHandler,
  PutContainerRecipePolicyHandler,
  PutImagePolicyHandler,
  PutImageRecipePolicyHandler,
  StartImagePipelineExecutionHandler,
  tagsHandler,
  UpdateDistributionConfigurationHandler,
  UpdateImagePipelineHandler,
  UpdateInfrastructureConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', CancelImageCreationHandler)
  .route('/', CreateComponentHandler)
  .route('/', CreateContainerRecipeHandler)
  .route('/', CreateDistributionConfigurationHandler)
  .route('/', CreateImageHandler)
  .route('/', CreateImagePipelineHandler)
  .route('/', CreateImageRecipeHandler)
  .route('/', CreateInfrastructureConfigurationHandler)
  .route('/', DeleteComponentComponentBuildVersionArnHandler)
  .route('/', DeleteContainerRecipeContainerRecipeArnHandler)
  .route('/', DeleteDistributionConfigurationDistributionConfigurationArnHandler)
  .route('/', DeleteImageImageBuildVersionArnHandler)
  .route('/', DeleteImagePipelineImagePipelineArnHandler)
  .route('/', DeleteImageRecipeImageRecipeArnHandler)
  .route('/', DeleteInfrastructureConfigurationInfrastructureConfigurationArnHandler)
  .route('/', GetComponentComponentBuildVersionArnHandler)
  .route('/', GetComponentPolicyComponentArnHandler)
  .route('/', GetContainerRecipeContainerRecipeArnHandler)
  .route('/', GetContainerRecipePolicyContainerRecipeArnHandler)
  .route('/', GetDistributionConfigurationDistributionConfigurationArnHandler)
  .route('/', GetImageImageBuildVersionArnHandler)
  .route('/', GetImagePipelineImagePipelineArnHandler)
  .route('/', GetImagePolicyImageArnHandler)
  .route('/', GetImageRecipeImageRecipeArnHandler)
  .route('/', GetImageRecipePolicyImageRecipeArnHandler)
  .route('/', GetInfrastructureConfigurationInfrastructureConfigurationArnHandler)
  .route('/', GetWorkflowExecutionWorkflowExecutionIdHandler)
  .route('/', GetWorkflowStepExecutionStepExecutionIdHandler)
  .route('/', ImportComponentHandler)
  .route('/', ImportVmImageHandler)
  .route('/', ListComponentBuildVersionsHandler)
  .route('/', ListComponentsHandler)
  .route('/', ListContainerRecipesHandler)
  .route('/', ListDistributionConfigurationsHandler)
  .route('/', ListImageBuildVersionsHandler)
  .route('/', ListImagePackagesHandler)
  .route('/', ListImagePipelineImagesHandler)
  .route('/', ListImagePipelinesHandler)
  .route('/', ListImageRecipesHandler)
  .route('/', ListImageScanFindingAggregationsHandler)
  .route('/', ListImageScanFindingsHandler)
  .route('/', ListImagesHandler)
  .route('/', ListInfrastructureConfigurationsHandler)
  .route('/', tagsHandler)
  .route('/', ListWorkflowExecutionsHandler)
  .route('/', ListWorkflowStepExecutionsHandler)
  .route('/', PutComponentPolicyHandler)
  .route('/', PutContainerRecipePolicyHandler)
  .route('/', PutImagePolicyHandler)
  .route('/', PutImageRecipePolicyHandler)
  .route('/', StartImagePipelineExecutionHandler)
  .route('/', UpdateDistributionConfigurationHandler)
  .route('/', UpdateImagePipelineHandler)
  .route('/', UpdateInfrastructureConfigurationHandler)

export default app
