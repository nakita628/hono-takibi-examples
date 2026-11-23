import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingHandler,
  xAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateHandler,
  xAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceHandler,
  xAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateHandler,
  xAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateHandler,
  xAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceHandler,
  xAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceHandler,
  xAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateHandler,
  xAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceHandler,
  xAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateHandler,
  xAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateHandler,
  xAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceHandler,
  xAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingHandler,
  xAmzTargetIotThingsGraphFrontEndServiceGetEntitiesHandler,
  xAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateHandler,
  xAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsHandler,
  xAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusHandler,
  xAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceHandler,
  xAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateHandler,
  xAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsHandler,
  xAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusHandler,
  xAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesHandler,
  xAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceHandler,
  xAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesHandler,
  xAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsHandler,
  xAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesHandler,
  xAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesHandler,
  xAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesHandler,
  xAmzTargetIotThingsGraphFrontEndServiceSearchThingsHandler,
  xAmzTargetIotThingsGraphFrontEndServiceTagResourceHandler,
  xAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceHandler,
  xAmzTargetIotThingsGraphFrontEndServiceUntagResourceHandler,
  xAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateHandler,
  xAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateHandler,
  xAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceGetEntitiesHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceSearchThingsHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceTagResourceHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceUntagResourceHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateHandler)
  .route('/', xAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsHandler)

export default app
