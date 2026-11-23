import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderReadyForPreparationSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const orderReadyForPreparationSyncHandler = app.openapi(
  postOrderReadyForPreparationSyncRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
