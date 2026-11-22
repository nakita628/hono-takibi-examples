import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateCoipCidrRoute, postActionCreateCoipCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateCoipCidrHandler = app
  .openapi(getActionCreateCoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
