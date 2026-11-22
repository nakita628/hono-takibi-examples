import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAssumeRoleWithSAMLRoute, postActionAssumeRoleWithSAMLRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAssumeRoleWithSAMLHandler = app
  .openapi(getActionAssumeRoleWithSAMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssumeRoleWithSAMLRoute, (c) => {
    throw new Error('Not implemented')
  })
