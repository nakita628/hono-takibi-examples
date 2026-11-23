import { OpenAPIHono } from '@hono/zod-openapi'
import { getListSessionsOfAuthorRoute, postListSessionsOfAuthorRoute } from '../routes'

const app = new OpenAPIHono()

export const listSessionsOfAuthorHandler = app
  .openapi(getListSessionsOfAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListSessionsOfAuthorRoute, (c) => {
    throw new Error('Not implemented')
  })
