import { OpenAPIHono } from '@hono/zod-openapi'
import { getUtilsConvertLegacyIdIdRoute } from '../routes'

const app = new OpenAPIHono()

export const utilHandler = app.openapi(getUtilsConvertLegacyIdIdRoute, (c) => {
  throw new Error('Not implemented')
})
