import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateServiceLinkedRoleRoute,
  postActionCreateServiceLinkedRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateServiceLinkedRoleHandler = app
  .openapi(getActionCreateServiceLinkedRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateServiceLinkedRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
