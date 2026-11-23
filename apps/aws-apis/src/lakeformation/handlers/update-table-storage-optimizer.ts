import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateTableStorageOptimizerRoute } from '../routes'

const app = new OpenAPIHono()

export const updateTableStorageOptimizerHandler = app.openapi(
  postUpdateTableStorageOptimizerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
