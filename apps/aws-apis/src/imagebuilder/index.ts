import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeleteComponentComponentBuildVersionArnRoute,
  deleteDeleteContainerRecipeContainerRecipeArnRoute,
  deleteDeleteDistributionConfigurationDistributionConfigurationArnRoute,
  deleteDeleteImageImageBuildVersionArnRoute,
  deleteDeleteImagePipelineImagePipelineArnRoute,
  deleteDeleteImageRecipeImageRecipeArnRoute,
  deleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnRoute,
  deleteTagsResourceArnTagKeysRoute,
  getGetComponentComponentBuildVersionArnRoute,
  getGetComponentPolicyComponentArnRoute,
  getGetContainerRecipeContainerRecipeArnRoute,
  getGetContainerRecipePolicyContainerRecipeArnRoute,
  getGetDistributionConfigurationDistributionConfigurationArnRoute,
  getGetImageImageBuildVersionArnRoute,
  getGetImagePipelineImagePipelineArnRoute,
  getGetImagePolicyImageArnRoute,
  getGetImageRecipeImageRecipeArnRoute,
  getGetImageRecipePolicyImageRecipeArnRoute,
  getGetInfrastructureConfigurationInfrastructureConfigurationArnRoute,
  getGetWorkflowExecutionWorkflowExecutionIdRoute,
  getGetWorkflowStepExecutionStepExecutionIdRoute,
  getTagsResourceArnRoute,
  postListComponentBuildVersionsRoute,
  postListComponentsRoute,
  postListContainerRecipesRoute,
  postListDistributionConfigurationsRoute,
  postListImageBuildVersionsRoute,
  postListImagePackagesRoute,
  postListImagePipelineImagesRoute,
  postListImagePipelinesRoute,
  postListImageRecipesRoute,
  postListImageScanFindingAggregationsRoute,
  postListImageScanFindingsRoute,
  postListImagesRoute,
  postListInfrastructureConfigurationsRoute,
  postListWorkflowExecutionsRoute,
  postListWorkflowStepExecutionsRoute,
  postTagsResourceArnRoute,
  putCancelImageCreationRoute,
  putCreateComponentRoute,
  putCreateContainerRecipeRoute,
  putCreateDistributionConfigurationRoute,
  putCreateImagePipelineRoute,
  putCreateImageRecipeRoute,
  putCreateImageRoute,
  putCreateInfrastructureConfigurationRoute,
  putImportComponentRoute,
  putImportVmImageRoute,
  putPutComponentPolicyRoute,
  putPutContainerRecipePolicyRoute,
  putPutImagePolicyRoute,
  putPutImageRecipePolicyRoute,
  putStartImagePipelineExecutionRoute,
  putUpdateDistributionConfigurationRoute,
  putUpdateImagePipelineRoute,
  putUpdateInfrastructureConfigurationRoute,
} from './routes'
import {
  deleteDeleteComponentComponentBuildVersionArnRouteHandler,
  deleteDeleteContainerRecipeContainerRecipeArnRouteHandler,
  deleteDeleteDistributionConfigurationDistributionConfigurationArnRouteHandler,
  deleteDeleteImageImageBuildVersionArnRouteHandler,
  deleteDeleteImagePipelineImagePipelineArnRouteHandler,
  deleteDeleteImageRecipeImageRecipeArnRouteHandler,
  deleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getGetComponentComponentBuildVersionArnRouteHandler,
  getGetComponentPolicyComponentArnRouteHandler,
  getGetContainerRecipeContainerRecipeArnRouteHandler,
  getGetContainerRecipePolicyContainerRecipeArnRouteHandler,
  getGetDistributionConfigurationDistributionConfigurationArnRouteHandler,
  getGetImageImageBuildVersionArnRouteHandler,
  getGetImagePipelineImagePipelineArnRouteHandler,
  getGetImagePolicyImageArnRouteHandler,
  getGetImageRecipeImageRecipeArnRouteHandler,
  getGetImageRecipePolicyImageRecipeArnRouteHandler,
  getGetInfrastructureConfigurationInfrastructureConfigurationArnRouteHandler,
  getGetWorkflowExecutionWorkflowExecutionIdRouteHandler,
  getGetWorkflowStepExecutionStepExecutionIdRouteHandler,
  getTagsResourceArnRouteHandler,
  postListComponentBuildVersionsRouteHandler,
  postListComponentsRouteHandler,
  postListContainerRecipesRouteHandler,
  postListDistributionConfigurationsRouteHandler,
  postListImageBuildVersionsRouteHandler,
  postListImagePackagesRouteHandler,
  postListImagePipelineImagesRouteHandler,
  postListImagePipelinesRouteHandler,
  postListImageRecipesRouteHandler,
  postListImageScanFindingAggregationsRouteHandler,
  postListImageScanFindingsRouteHandler,
  postListImagesRouteHandler,
  postListInfrastructureConfigurationsRouteHandler,
  postListWorkflowExecutionsRouteHandler,
  postListWorkflowStepExecutionsRouteHandler,
  postTagsResourceArnRouteHandler,
  putCancelImageCreationRouteHandler,
  putCreateComponentRouteHandler,
  putCreateContainerRecipeRouteHandler,
  putCreateDistributionConfigurationRouteHandler,
  putCreateImagePipelineRouteHandler,
  putCreateImageRecipeRouteHandler,
  putCreateImageRouteHandler,
  putCreateInfrastructureConfigurationRouteHandler,
  putImportComponentRouteHandler,
  putImportVmImageRouteHandler,
  putPutComponentPolicyRouteHandler,
  putPutContainerRecipePolicyRouteHandler,
  putPutImagePolicyRouteHandler,
  putPutImageRecipePolicyRouteHandler,
  putStartImagePipelineExecutionRouteHandler,
  putUpdateDistributionConfigurationRouteHandler,
  putUpdateImagePipelineRouteHandler,
  putUpdateInfrastructureConfigurationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putCancelImageCreationRoute, putCancelImageCreationRouteHandler)
  .openapi(putCreateComponentRoute, putCreateComponentRouteHandler)
  .openapi(putCreateContainerRecipeRoute, putCreateContainerRecipeRouteHandler)
  .openapi(putCreateDistributionConfigurationRoute, putCreateDistributionConfigurationRouteHandler)
  .openapi(putCreateImageRoute, putCreateImageRouteHandler)
  .openapi(putCreateImagePipelineRoute, putCreateImagePipelineRouteHandler)
  .openapi(putCreateImageRecipeRoute, putCreateImageRecipeRouteHandler)
  .openapi(
    putCreateInfrastructureConfigurationRoute,
    putCreateInfrastructureConfigurationRouteHandler,
  )
  .openapi(
    deleteDeleteComponentComponentBuildVersionArnRoute,
    deleteDeleteComponentComponentBuildVersionArnRouteHandler,
  )
  .openapi(
    deleteDeleteContainerRecipeContainerRecipeArnRoute,
    deleteDeleteContainerRecipeContainerRecipeArnRouteHandler,
  )
  .openapi(
    deleteDeleteDistributionConfigurationDistributionConfigurationArnRoute,
    deleteDeleteDistributionConfigurationDistributionConfigurationArnRouteHandler,
  )
  .openapi(
    deleteDeleteImageImageBuildVersionArnRoute,
    deleteDeleteImageImageBuildVersionArnRouteHandler,
  )
  .openapi(
    deleteDeleteImagePipelineImagePipelineArnRoute,
    deleteDeleteImagePipelineImagePipelineArnRouteHandler,
  )
  .openapi(
    deleteDeleteImageRecipeImageRecipeArnRoute,
    deleteDeleteImageRecipeImageRecipeArnRouteHandler,
  )
  .openapi(
    deleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnRoute,
    deleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnRouteHandler,
  )
  .openapi(
    getGetComponentComponentBuildVersionArnRoute,
    getGetComponentComponentBuildVersionArnRouteHandler,
  )
  .openapi(getGetComponentPolicyComponentArnRoute, getGetComponentPolicyComponentArnRouteHandler)
  .openapi(
    getGetContainerRecipeContainerRecipeArnRoute,
    getGetContainerRecipeContainerRecipeArnRouteHandler,
  )
  .openapi(
    getGetContainerRecipePolicyContainerRecipeArnRoute,
    getGetContainerRecipePolicyContainerRecipeArnRouteHandler,
  )
  .openapi(
    getGetDistributionConfigurationDistributionConfigurationArnRoute,
    getGetDistributionConfigurationDistributionConfigurationArnRouteHandler,
  )
  .openapi(getGetImageImageBuildVersionArnRoute, getGetImageImageBuildVersionArnRouteHandler)
  .openapi(
    getGetImagePipelineImagePipelineArnRoute,
    getGetImagePipelineImagePipelineArnRouteHandler,
  )
  .openapi(getGetImagePolicyImageArnRoute, getGetImagePolicyImageArnRouteHandler)
  .openapi(getGetImageRecipeImageRecipeArnRoute, getGetImageRecipeImageRecipeArnRouteHandler)
  .openapi(
    getGetImageRecipePolicyImageRecipeArnRoute,
    getGetImageRecipePolicyImageRecipeArnRouteHandler,
  )
  .openapi(
    getGetInfrastructureConfigurationInfrastructureConfigurationArnRoute,
    getGetInfrastructureConfigurationInfrastructureConfigurationArnRouteHandler,
  )
  .openapi(
    getGetWorkflowExecutionWorkflowExecutionIdRoute,
    getGetWorkflowExecutionWorkflowExecutionIdRouteHandler,
  )
  .openapi(
    getGetWorkflowStepExecutionStepExecutionIdRoute,
    getGetWorkflowStepExecutionStepExecutionIdRouteHandler,
  )
  .openapi(putImportComponentRoute, putImportComponentRouteHandler)
  .openapi(putImportVmImageRoute, putImportVmImageRouteHandler)
  .openapi(postListComponentBuildVersionsRoute, postListComponentBuildVersionsRouteHandler)
  .openapi(postListComponentsRoute, postListComponentsRouteHandler)
  .openapi(postListContainerRecipesRoute, postListContainerRecipesRouteHandler)
  .openapi(postListDistributionConfigurationsRoute, postListDistributionConfigurationsRouteHandler)
  .openapi(postListImageBuildVersionsRoute, postListImageBuildVersionsRouteHandler)
  .openapi(postListImagePackagesRoute, postListImagePackagesRouteHandler)
  .openapi(postListImagePipelineImagesRoute, postListImagePipelineImagesRouteHandler)
  .openapi(postListImagePipelinesRoute, postListImagePipelinesRouteHandler)
  .openapi(postListImageRecipesRoute, postListImageRecipesRouteHandler)
  .openapi(
    postListImageScanFindingAggregationsRoute,
    postListImageScanFindingAggregationsRouteHandler,
  )
  .openapi(postListImageScanFindingsRoute, postListImageScanFindingsRouteHandler)
  .openapi(postListImagesRoute, postListImagesRouteHandler)
  .openapi(
    postListInfrastructureConfigurationsRoute,
    postListInfrastructureConfigurationsRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postListWorkflowExecutionsRoute, postListWorkflowExecutionsRouteHandler)
  .openapi(postListWorkflowStepExecutionsRoute, postListWorkflowStepExecutionsRouteHandler)
  .openapi(putPutComponentPolicyRoute, putPutComponentPolicyRouteHandler)
  .openapi(putPutContainerRecipePolicyRoute, putPutContainerRecipePolicyRouteHandler)
  .openapi(putPutImagePolicyRoute, putPutImagePolicyRouteHandler)
  .openapi(putPutImageRecipePolicyRoute, putPutImageRecipePolicyRouteHandler)
  .openapi(putStartImagePipelineExecutionRoute, putStartImagePipelineExecutionRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(putUpdateDistributionConfigurationRoute, putUpdateDistributionConfigurationRouteHandler)
  .openapi(putUpdateImagePipelineRoute, putUpdateImagePipelineRouteHandler)
  .openapi(
    putUpdateInfrastructureConfigurationRoute,
    putUpdateInfrastructureConfigurationRouteHandler,
  )

export default app
