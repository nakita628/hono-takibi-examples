import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreateGroupIfNotExistsForRoute, postCreateGroupIfNotExistsForRoute } from '../routes'

const app = new OpenAPIHono()

export const createGroupIfNotExistsForHandler = app
  .openapi(getCreateGroupIfNotExistsForRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateGroupIfNotExistsForRoute, (c) => {
    throw new Error('Not implemented')
  })
