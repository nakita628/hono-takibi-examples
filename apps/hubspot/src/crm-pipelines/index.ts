import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmPipelines202609ObjectTypePipelineIdRoute,
  deleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
  getCrmPipelines202609ObjectTypePipelineIdAuditRoute,
  getCrmPipelines202609ObjectTypePipelineIdRoute,
  getCrmPipelines202609ObjectTypePipelineIdStagesRoute,
  getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditRoute,
  getCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
  getCrmPipelines202609ObjectTypeRoute,
  patchCrmPipelines202609ObjectTypePipelineIdRoute,
  patchCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
  postCrmPipelines202609ObjectTypePipelineIdStagesRoute,
  postCrmPipelines202609ObjectTypeRoute,
  putCrmPipelines202609ObjectTypePipelineIdRoute,
  putCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
} from './routes'
import {
  deleteCrmPipelines202609ObjectTypePipelineIdRouteHandler,
  deleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdRouteHandler,
  getCrmPipelines202609ObjectTypePipelineIdAuditRouteHandler,
  getCrmPipelines202609ObjectTypePipelineIdRouteHandler,
  getCrmPipelines202609ObjectTypePipelineIdStagesRouteHandler,
  getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditRouteHandler,
  getCrmPipelines202609ObjectTypePipelineIdStagesStageIdRouteHandler,
  getCrmPipelines202609ObjectTypeRouteHandler,
  patchCrmPipelines202609ObjectTypePipelineIdRouteHandler,
  patchCrmPipelines202609ObjectTypePipelineIdStagesStageIdRouteHandler,
  postCrmPipelines202609ObjectTypePipelineIdStagesRouteHandler,
  postCrmPipelines202609ObjectTypeRouteHandler,
  putCrmPipelines202609ObjectTypePipelineIdRouteHandler,
  putCrmPipelines202609ObjectTypePipelineIdStagesStageIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmPipelines202609ObjectTypeRoute, getCrmPipelines202609ObjectTypeRouteHandler)
  .openapi(postCrmPipelines202609ObjectTypeRoute, postCrmPipelines202609ObjectTypeRouteHandler)
  .openapi(
    getCrmPipelines202609ObjectTypePipelineIdRoute,
    getCrmPipelines202609ObjectTypePipelineIdRouteHandler,
  )
  .openapi(
    putCrmPipelines202609ObjectTypePipelineIdRoute,
    putCrmPipelines202609ObjectTypePipelineIdRouteHandler,
  )
  .openapi(
    deleteCrmPipelines202609ObjectTypePipelineIdRoute,
    deleteCrmPipelines202609ObjectTypePipelineIdRouteHandler,
  )
  .openapi(
    patchCrmPipelines202609ObjectTypePipelineIdRoute,
    patchCrmPipelines202609ObjectTypePipelineIdRouteHandler,
  )
  .openapi(
    getCrmPipelines202609ObjectTypePipelineIdAuditRoute,
    getCrmPipelines202609ObjectTypePipelineIdAuditRouteHandler,
  )
  .openapi(
    getCrmPipelines202609ObjectTypePipelineIdStagesRoute,
    getCrmPipelines202609ObjectTypePipelineIdStagesRouteHandler,
  )
  .openapi(
    postCrmPipelines202609ObjectTypePipelineIdStagesRoute,
    postCrmPipelines202609ObjectTypePipelineIdStagesRouteHandler,
  )
  .openapi(
    getCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
    getCrmPipelines202609ObjectTypePipelineIdStagesStageIdRouteHandler,
  )
  .openapi(
    putCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
    putCrmPipelines202609ObjectTypePipelineIdStagesStageIdRouteHandler,
  )
  .openapi(
    deleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
    deleteCrmPipelines202609ObjectTypePipelineIdStagesStageIdRouteHandler,
  )
  .openapi(
    patchCrmPipelines202609ObjectTypePipelineIdStagesStageIdRoute,
    patchCrmPipelines202609ObjectTypePipelineIdStagesStageIdRouteHandler,
  )
  .openapi(
    getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditRoute,
    getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAuditRouteHandler,
  )

export default app
