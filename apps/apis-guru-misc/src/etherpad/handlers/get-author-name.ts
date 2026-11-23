import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetAuthorNameRoute, postGetAuthorNameRoute } from '../routes'

const app = new OpenAPIHono()

export const getAuthorNameHandler = app
  .openapi(getGetAuthorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetAuthorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
