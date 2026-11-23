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
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
