import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetComponentPolicyComponentArnRoute } from '../routes'

const app = new OpenAPIHono()

export const GetComponentPolicyComponentArnHandler = app.openapi(
  getGetComponentPolicyComponentArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
