import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListChangeSetsRoute, postActionListChangeSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListChangeSetsHandler = app
  .openapi(getActionListChangeSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListChangeSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
