import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpOcmProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const ocmHandler = app.openapi(getIndexPhpOcmProviderRoute, (c) => {
  throw new Error('Not implemented')
})
