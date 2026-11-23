import { OpenAPIHono } from '@hono/zod-openapi'
import { getListSessionsOfGroupRoute, postListSessionsOfGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const listSessionsOfGroupHandler = app
  .openapi(getListSessionsOfGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListSessionsOfGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
