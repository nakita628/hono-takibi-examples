import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateGroupRoute, postActionCreateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateGroupHandler = app
  .openapi(getActionCreateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
