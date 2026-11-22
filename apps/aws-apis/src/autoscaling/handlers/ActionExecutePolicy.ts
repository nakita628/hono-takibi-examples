import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionExecutePolicyRoute, postActionExecutePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionExecutePolicyHandler = app
  .openapi(getActionExecutePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionExecutePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
