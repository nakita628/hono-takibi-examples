import { OpenAPIHono } from '@hono/zod-openapi'
import { getResourcesMediaTypesFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaTypesHandler = app.openapi(getResourcesMediaTypesFormatRoute, (c) => {
  throw new Error('Not implemented')
})
