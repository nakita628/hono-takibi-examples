import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateDeletionProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const updateDeletionProtectionHandler = app.openapi(
  postUpdateDeletionProtectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
