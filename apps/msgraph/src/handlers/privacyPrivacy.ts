import { OpenAPIHono } from '@hono/zod-openapi'
import { getPrivacyRoute, patchPrivacyRoute } from '../routes'

const app = new OpenAPIHono()

export const privacyPrivacyHandler = app
  .openapi(getPrivacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrivacyRoute, (c) => {
    throw new Error('Not implemented')
  })
