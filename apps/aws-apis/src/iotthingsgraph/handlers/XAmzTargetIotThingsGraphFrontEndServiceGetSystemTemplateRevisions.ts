import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
