import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssumeDecoratedRoleWithSAMLRoute } from '../routes'

const app = new OpenAPIHono()

export const AssumeDecoratedRoleWithSAMLHandler = app.openapi(
  postAssumeDecoratedRoleWithSAMLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
