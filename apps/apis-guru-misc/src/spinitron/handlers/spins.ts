import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpinsIdRoute, getSpinsRoute, postSpinsRoute } from '../routes'

const app = new OpenAPIHono()

export const spinsHandler = app
  .openapi(getSpinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpinsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
