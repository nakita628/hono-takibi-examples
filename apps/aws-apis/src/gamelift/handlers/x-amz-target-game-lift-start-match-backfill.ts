import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftStartMatchBackfillRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftStartMatchBackfillHandler = app.openapi(
  postXAmzTargetGameLiftStartMatchBackfillRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
