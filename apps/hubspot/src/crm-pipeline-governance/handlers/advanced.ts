import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(
  postCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartRoute,
  (c) => {},
)
