import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionExecuteChangeSetRoute, postActionExecuteChangeSetRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionExecuteChangeSetHandler = app
  .openapi(getActionExecuteChangeSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionExecuteChangeSetRoute, (c) => {
    throw new Error('Not implemented')
  })
