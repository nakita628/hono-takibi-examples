import { OpenAPIHono } from '@hono/zod-openapi'
import { postLibsGraniteSecurityPostSslSetupHtmlRoute } from '../routes'

const app = new OpenAPIHono()

export const graniteHandler = app.openapi(postLibsGraniteSecurityPostSslSetupHtmlRoute, (c) => {
  throw new Error('Not implemented')
})
