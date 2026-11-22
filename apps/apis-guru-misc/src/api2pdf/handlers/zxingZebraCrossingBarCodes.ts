import { OpenAPIHono } from '@hono/zod-openapi'
import { getZebraRoute } from '../routes'

const app = new OpenAPIHono()

export const zxingZebraCrossingBarCodesHandler = app.openapi(getZebraRoute, (c) => {
  throw new Error('Not implemented')
})
