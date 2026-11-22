import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsCartIdTotalsInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdTotalsInformationHandler = app.openapi(
  postV1CartsCartIdTotalsInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
