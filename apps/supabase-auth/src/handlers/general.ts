import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthRoute, getSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
