import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteRaidsRoute, postRaidsRoute } from '../routes'

const app = new OpenAPIHono()

export const raidsHandler = app
  .openapi(postRaidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRaidsRoute, (c) => {
    throw new Error('Not implemented')
  })
