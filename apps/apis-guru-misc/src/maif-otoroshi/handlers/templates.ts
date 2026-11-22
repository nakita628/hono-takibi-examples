import { OpenAPIHono } from '@hono/zod-openapi'
import { getNewApikeyRoute, getNewGroupRoute, getNewServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getNewApikeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNewGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNewServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
