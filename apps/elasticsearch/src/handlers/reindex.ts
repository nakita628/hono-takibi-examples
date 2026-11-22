import { OpenAPIHono } from '@hono/zod-openapi'
import { getReindexRoute, getReindexTaskIdRoute, postReindexTaskIdCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const reindexHandler = app
  .openapi(postReindexTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReindexTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
