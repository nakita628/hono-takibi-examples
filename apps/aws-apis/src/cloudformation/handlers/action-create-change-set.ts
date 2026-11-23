import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateChangeSetRoute, postActionCreateChangeSetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateChangeSetHandler = app
  .openapi(getActionCreateChangeSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateChangeSetRoute, (c) => {
    throw new Error('Not implemented')
  })
