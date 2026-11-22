import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateStackRoute, postActionUpdateStackRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateStackHandler = app
  .openapi(getActionUpdateStackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateStackRoute, (c) => {
    throw new Error('Not implemented')
  })
