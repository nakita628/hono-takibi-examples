import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetStaticIpsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetStaticIpsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetStaticIpsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
