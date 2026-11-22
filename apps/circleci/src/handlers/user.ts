import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeCollaborationsRoute, getMeRoute, getUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCollaborationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
