import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoryCountJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryCountJsonHandler = app.openapi(getCategoryCountJsonRoute, (c) => {
  throw new Error('Not implemented')
})
