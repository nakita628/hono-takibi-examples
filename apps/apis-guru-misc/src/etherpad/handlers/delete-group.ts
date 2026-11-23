import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeleteGroupRoute, postDeleteGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteGroupHandler = app
  .openapi(getDeleteGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
