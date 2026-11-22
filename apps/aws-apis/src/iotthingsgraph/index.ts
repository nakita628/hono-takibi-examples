import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingHandler,
  XAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateHandler,
  XAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceHandler,
  XAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateHandler,
  XAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateHandler,
  XAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceHandler,
  XAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceHandler,
  XAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateHandler,
  XAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceHandler,
  XAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateHandler,
  XAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateHandler,
  XAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceHandler,
  XAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingHandler,
  XAmzTargetIotThingsGraphFrontEndServiceGetEntitiesHandler,
  XAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateHandler,
  XAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsHandler,
  XAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusHandler,
  XAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceHandler,
  XAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateHandler,
  XAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsHandler,
  XAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusHandler,
  XAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesHandler,
  XAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceHandler,
  XAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesHandler,
  XAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsHandler,
  XAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesHandler,
  XAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesHandler,
  XAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesHandler,
  XAmzTargetIotThingsGraphFrontEndServiceSearchThingsHandler,
  XAmzTargetIotThingsGraphFrontEndServiceTagResourceHandler,
  XAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceHandler,
  XAmzTargetIotThingsGraphFrontEndServiceUntagResourceHandler,
  XAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateHandler,
  XAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateHandler,
  XAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceGetEntitiesHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceSearchThingsHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceTagResourceHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceUntagResourceHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateHandler)
  .route('/', XAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsHandler)

export default app
