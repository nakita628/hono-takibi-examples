import { OpenAPIHono } from '@hono/zod-openapi'
import { getCwsFilterSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const cwsFilterSchemaHandler = app.openapi(getCwsFilterSchemaRoute, (c) => {
  throw new Error('Not implemented')
})
