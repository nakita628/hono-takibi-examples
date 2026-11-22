import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteChangeSetRoute, postActionDeleteChangeSetRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteChangeSetHandler = app
  .openapi(getActionDeleteChangeSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteChangeSetRoute, (c) => {
    throw new Error('Not implemented')
  })
