import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftListFleetsHandler = app.openapi(
  postXAmzTargetGameLiftListFleetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
