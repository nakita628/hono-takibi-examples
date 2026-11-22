import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2betaNameRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(getV2betaNameRoute, (c) => {
  throw new Error('Not implemented')
})
