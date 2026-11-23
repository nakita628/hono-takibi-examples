import { OpenAPIHono } from '@hono/zod-openapi'
import { getPagespeedonlineV5RunPagespeedRoute } from '../routes'

const app = new OpenAPIHono()

export const pagespeedonlineHandler = app.openapi(getPagespeedonlineV5RunPagespeedRoute, (c) => {
  throw new Error('Not implemented')
})
