import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute,
  getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdRoute,
  getCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute,
  getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRoute,
  patchCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute,
  postCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartRoute,
  putCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute,
  putCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRoute,
} from './routes'
import {
  deleteCrmPipelinesRules202609ObjectTypeIdPipelineIdRouteHandler,
  getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdRouteHandler,
  getCrmPipelinesRules202609ObjectTypeIdPipelineIdRouteHandler,
  getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRouteHandler,
  patchCrmPipelinesRules202609ObjectTypeIdPipelineIdRouteHandler,
  postCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartRouteHandler,
  putCrmPipelinesRules202609ObjectTypeIdPipelineIdRouteHandler,
  putCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute,
    getCrmPipelinesRules202609ObjectTypeIdPipelineIdRouteHandler,
  )
  .openapi(
    putCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute,
    putCrmPipelinesRules202609ObjectTypeIdPipelineIdRouteHandler,
  )
  .openapi(
    deleteCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute,
    deleteCrmPipelinesRules202609ObjectTypeIdPipelineIdRouteHandler,
  )
  .openapi(
    patchCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute,
    patchCrmPipelinesRules202609ObjectTypeIdPipelineIdRouteHandler,
  )
  .openapi(
    postCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartRoute,
    postCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartRouteHandler,
  )
  .openapi(
    getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdRoute,
    getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdRouteHandler,
  )
  .openapi(
    getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRoute,
    getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRouteHandler,
  )
  .openapi(
    putCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRoute,
    putCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRouteHandler,
  )

export default app
