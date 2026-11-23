import { OpenAPIHono } from '@hono/zod-openapi'
import { getPersonasIdRoute, getPersonasRoute } from '../routes'

const app = new OpenAPIHono()

export const personasHandler = app
  .openapi(getPersonasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
