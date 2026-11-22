import { OpenAPIHono } from '@hono/zod-openapi'
import { getWimStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const wiMWechselprozesseImMesswesenStrom__StatusAPIHandler = app.openapi(
  getWimStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
