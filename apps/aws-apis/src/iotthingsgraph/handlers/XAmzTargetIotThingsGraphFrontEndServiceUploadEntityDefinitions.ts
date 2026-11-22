import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
