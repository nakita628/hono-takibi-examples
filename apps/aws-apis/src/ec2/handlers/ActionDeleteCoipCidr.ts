import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteCoipCidrRoute, postActionDeleteCoipCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteCoipCidrHandler = app
  .openapi(getActionDeleteCoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteCoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
