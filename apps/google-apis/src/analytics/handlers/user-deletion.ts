import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserDeletionUserDeletionRequestsUpsertRoute } from '../routes'

const app = new OpenAPIHono()

export const userDeletionHandler = app.openapi(
  postUserDeletionUserDeletionRequestsUpsertRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
