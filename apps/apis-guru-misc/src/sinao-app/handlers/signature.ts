import { OpenAPIHono } from '@hono/zod-openapi'
import { postAppsAppIdSignatureRoute } from '../routes'

const app = new OpenAPIHono()

export const signatureHandler = app.openapi(postAppsAppIdSignatureRoute, (c) => {
  throw new Error('Not implemented')
})
