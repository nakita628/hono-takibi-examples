import { OpenAPIHono } from '@hono/zod-openapi'
import { getMaxindexRoute } from '../routes'

const app = new OpenAPIHono()

export const maxindexHandler = app.openapi(getMaxindexRoute, (c) => {
  throw new Error('Not implemented')
})
