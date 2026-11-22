import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsCostInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const productsCostInformationHandler = app.openapi(
  postV1ProductsCostInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
