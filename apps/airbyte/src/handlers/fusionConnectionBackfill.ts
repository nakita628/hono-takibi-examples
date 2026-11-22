import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ConnectionsConnectionIdBackfillRoute } from '../routes'

const app = new OpenAPIHono()

export const fusionConnectionBackfillHandler = app.openapi(
  postV1ConnectionsConnectionIdBackfillRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
