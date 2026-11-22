import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiResourcesCultureCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const resourcesApiHandler = app.openapi(getApiResourcesCultureCodeRoute, (c) => {
  throw new Error('Not implemented')
})
