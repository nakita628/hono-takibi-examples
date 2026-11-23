import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteServiceLinkedRoleRoute,
  postActionDeleteServiceLinkedRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteServiceLinkedRoleHandler = app
  .openapi(getActionDeleteServiceLinkedRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteServiceLinkedRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
