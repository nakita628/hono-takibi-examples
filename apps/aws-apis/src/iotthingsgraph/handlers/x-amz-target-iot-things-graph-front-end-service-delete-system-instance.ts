import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
