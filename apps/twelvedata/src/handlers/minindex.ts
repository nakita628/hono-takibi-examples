import { OpenAPIHono } from '@hono/zod-openapi'
import { getMinindexRoute } from '../routes'

const app = new OpenAPIHono()

export const minindexHandler = app.openapi(getMinindexRoute, (c) => {
  throw new Error('Not implemented')
})
