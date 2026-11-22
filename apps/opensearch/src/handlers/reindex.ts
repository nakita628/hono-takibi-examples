import { OpenAPIHono } from '@hono/zod-openapi'
import { postReindexRoute, postReindexTaskIdRethrottleRoute } from '../routes'

const app = new OpenAPIHono()

export const reindexHandler = app
  .openapi(postReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReindexTaskIdRethrottleRoute, (c) => {
    throw new Error('Not implemented')
  })
