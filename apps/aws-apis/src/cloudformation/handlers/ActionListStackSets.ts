import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListStackSetsRoute, postActionListStackSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListStackSetsHandler = app
  .openapi(getActionListStackSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListStackSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
