import { OpenAPIHono } from '@hono/zod-openapi'
import { getPresencesIdRoute, getPresencesRoute } from '../routes'

const app = new OpenAPIHono()

export const presencesHandler = app
  .openapi(getPresencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPresencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
