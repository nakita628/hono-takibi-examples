import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHardwareGroupsGroupIdRoute,
  getHardwareGroupsRoute,
  putHardwareGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getHardwareGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putHardwareGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
