import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListTopicsRoute, postActionListTopicsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListTopicsHandler = app
  .openapi(getActionListTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
