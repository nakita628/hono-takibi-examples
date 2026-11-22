import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiThemesKeyRoute, getApiThemesRoute } from '../routes'

const app = new OpenAPIHono()

export const themesHandler = app
  .openapi(getApiThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiThemesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
