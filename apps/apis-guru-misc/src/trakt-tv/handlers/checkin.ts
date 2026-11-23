import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCheckinRoute, postCheckinRoute } from '../routes'

const app = new OpenAPIHono()

export const checkinHandler = app
  .openapi(deleteCheckinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckinRoute, (c) => {
    throw new Error('Not implemented')
  })
