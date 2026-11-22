import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1GenevaActionsResourcesResourceIdUnderInvestigationRoute } from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app.openapi(
  postApiV1GenevaActionsResourcesResourceIdUnderInvestigationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
