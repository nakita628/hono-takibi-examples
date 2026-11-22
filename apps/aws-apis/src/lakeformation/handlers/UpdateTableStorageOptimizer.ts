import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateTableStorageOptimizerRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateTableStorageOptimizerHandler = app.openapi(
  postUpdateTableStorageOptimizerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
