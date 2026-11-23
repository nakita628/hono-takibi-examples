import { OpenAPIHono } from '@hono/zod-openapi'
import { getCspsCategoriesRoute, getCspsFindRoute, getCspsIdRoute, getCspsRoute } from '../routes'

const app = new OpenAPIHono()

export const cspsHandler = app
  .openapi(getCspsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCspsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCspsFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCspsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
