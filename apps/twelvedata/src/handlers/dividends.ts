import { OpenAPIHono } from '@hono/zod-openapi'
import { getDividendsRoute } from '../routes'

const app = new OpenAPIHono()

export const dividendsHandler = app.openapi(getDividendsRoute, (c) => {
  throw new Error('Not implemented')
})
