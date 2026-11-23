import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRemoveRoleFromInstanceProfileRoute,
  postActionRemoveRoleFromInstanceProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRemoveRoleFromInstanceProfileHandler = app
  .openapi(getActionRemoveRoleFromInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveRoleFromInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
