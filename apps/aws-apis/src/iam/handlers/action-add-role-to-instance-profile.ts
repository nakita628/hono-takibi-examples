import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddRoleToInstanceProfileRoute,
  postActionAddRoleToInstanceProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAddRoleToInstanceProfileHandler = app
  .openapi(getActionAddRoleToInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddRoleToInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
