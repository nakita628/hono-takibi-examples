import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderReadyForPreparationAsyncRoute } from '../routes'

const app = new OpenAPIHono()

export const orderReadyForPreparationAsyncHandler = app.openapi(
  postOrderReadyForPreparationAsyncRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
