import { OpenAPIHono } from '@hono/zod-openapi'
import { getThemesIdRoute, getThemesRoute } from '../routes'

const app = new OpenAPIHono()

export const themesHandler = app
  .openapi(getThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
