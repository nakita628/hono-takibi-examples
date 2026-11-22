import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssumeRoleWithWebIdentityRoute,
  postActionAssumeRoleWithWebIdentityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAssumeRoleWithWebIdentityHandler = app
  .openapi(getActionAssumeRoleWithWebIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssumeRoleWithWebIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
