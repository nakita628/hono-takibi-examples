import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateGroupRoute, postActionUpdateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUpdateGroupHandler = app
  .openapi(getActionUpdateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
