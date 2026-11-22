import { OpenAPIHono } from '@hono/zod-openapi'
import { getParcelsPidsSiteIDOutputFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const parcelsHandler = app.openapi(getParcelsPidsSiteIDOutputFormatRoute, (c) => {
  throw new Error('Not implemented')
})
