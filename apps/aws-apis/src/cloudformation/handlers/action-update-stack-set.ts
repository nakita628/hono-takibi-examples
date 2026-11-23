import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateStackSetRoute, postActionUpdateStackSetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUpdateStackSetHandler = app
  .openapi(getActionUpdateStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })
