import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetLastEditedRoute, postGetLastEditedRoute } from '../routes'

const app = new OpenAPIHono()

export const getLastEditedHandler = app
  .openapi(getGetLastEditedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetLastEditedRoute, (c) => {
    throw new Error('Not implemented')
  })
