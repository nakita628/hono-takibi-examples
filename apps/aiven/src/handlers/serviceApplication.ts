import { OpenAPIHono } from '@hono/zod-openapi'
import { postProjectProjectServiceServiceNameApplicationRedeployRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceApplicationHandler = app.openapi(
  postProjectProjectServiceServiceNameApplicationRedeployRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
