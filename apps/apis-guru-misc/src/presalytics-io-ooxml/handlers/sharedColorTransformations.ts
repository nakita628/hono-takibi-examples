import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedColorTransformationsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedColorTransformationsHandler = app.openapi(
  getSharedColorTransformationsIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
