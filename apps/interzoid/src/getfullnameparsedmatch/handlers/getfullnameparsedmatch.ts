import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetfullnameparsedmatchRoute } from '../routes'

const app = new OpenAPIHono()

export const getfullnameparsedmatchHandler = app.openapi(getGetfullnameparsedmatchRoute, (c) => {
  throw new Error('Not implemented')
})
