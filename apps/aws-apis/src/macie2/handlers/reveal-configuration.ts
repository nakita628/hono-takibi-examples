import { OpenAPIHono } from '@hono/zod-openapi'
import { getRevealConfigurationRoute, putRevealConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const revealConfigurationHandler = app
  .openapi(getRevealConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRevealConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
