import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetServiceLinkedRoleDeletionStatusRoute,
  postActionGetServiceLinkedRoleDeletionStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetServiceLinkedRoleDeletionStatusHandler = app
  .openapi(getActionGetServiceLinkedRoleDeletionStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetServiceLinkedRoleDeletionStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
