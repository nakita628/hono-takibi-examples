import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeRoute, postMeRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeRoute, (c) => {
    throw new Error('Not implemented')
  })
