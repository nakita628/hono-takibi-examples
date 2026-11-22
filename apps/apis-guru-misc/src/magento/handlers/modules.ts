import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ModulesRoute } from '../routes'

const app = new OpenAPIHono()

export const modulesHandler = app.openapi(getV1ModulesRoute, (c) => {
  throw new Error('Not implemented')
})
