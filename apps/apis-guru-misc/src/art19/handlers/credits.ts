import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreditsIdRoute, getCreditsRoute } from '../routes'

const app = new OpenAPIHono()

export const creditsHandler = app
  .openapi(getCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
