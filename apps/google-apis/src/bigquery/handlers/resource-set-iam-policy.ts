import { OpenAPIHono } from '@hono/zod-openapi'
import { postResourceSetIamPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceSetIamPolicyHandler = app.openapi(postResourceSetIamPolicyRoute, (c) => {
  throw new Error('Not implemented')
})
