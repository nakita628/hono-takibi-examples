import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeCollaborationsRoute, getMeRoute } from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCollaborationsRoute, (c) => {
    throw new Error('Not implemented')
  })
