import { OpenAPIHono } from '@hono/zod-openapi'
import { getPersonsNameRoute, getPersonsRoute } from '../routes'

const app = new OpenAPIHono()

export const personsHandler = app
  .openapi(getPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
