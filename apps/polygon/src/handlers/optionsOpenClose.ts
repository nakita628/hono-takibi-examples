import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OpenCloseOptionsTickerDateRoute } from '../routes'

const app = new OpenAPIHono()

export const optionsOpenCloseHandler = app.openapi(getV1OpenCloseOptionsTickerDateRoute, (c) => {
  throw new Error('Not implemented')
})
