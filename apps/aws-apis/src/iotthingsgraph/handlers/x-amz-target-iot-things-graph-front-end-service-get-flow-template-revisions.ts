import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
