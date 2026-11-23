import { OpenAPIHono } from '@hono/zod-openapi'
import { postGettotalsRoute } from '../routes'

const app = new OpenAPIHono()

export const gettotalsHandler = app.openapi(postGettotalsRoute, (c) => {
  throw new Error('Not implemented')
})
