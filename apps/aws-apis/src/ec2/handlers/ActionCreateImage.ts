import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateImageRoute, postActionCreateImageRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateImageHandler = app
  .openapi(getActionCreateImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateImageRoute, (c) => {
    throw new Error('Not implemented')
  })
