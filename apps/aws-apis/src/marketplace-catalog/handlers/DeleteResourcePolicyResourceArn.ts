import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteResourcePolicyResourceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteResourcePolicyResourceArnHandler = app.openapi(
  deleteDeleteResourcePolicyResourceArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
