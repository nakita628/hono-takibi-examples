import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdGroupsRoute,
  getV21AccountsAccountIdGroupsRoute,
  postV21AccountsAccountIdGroupsRoute,
  putV21AccountsAccountIdGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(deleteV21AccountsAccountIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
