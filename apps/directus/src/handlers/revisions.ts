import { OpenAPIHono } from '@hono/zod-openapi'
import { getRevisionsIdRoute, getRevisionsRoute } from '../routes'

const app = new OpenAPIHono()

export const revisionsHandler = app
  .openapi(getRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRevisionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
