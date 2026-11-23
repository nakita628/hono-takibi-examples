import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreateGroupRoute, postCreateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const createGroupHandler = app
  .openapi(getCreateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
