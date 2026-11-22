import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1TemandoRmaRmaIdShipmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const temandoRmaRmaIdShipmentsHandler = app.openapi(
  putV1TemandoRmaRmaIdShipmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
