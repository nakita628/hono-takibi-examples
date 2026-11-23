import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftListFleetsHandler = app.openapi(
  postXAmzTargetGameLiftListFleetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
