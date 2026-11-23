import { OpenAPIHono } from '@hono/zod-openapi'
import { getMgetRoute, postMgetRoute } from '../routes'

const app = new OpenAPIHono()

export const mgetHandler = app
  .openapi(getMgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMgetRoute, (c) => {
    throw new Error('Not implemented')
  })
