import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3AccountsAccountIdGroupsIdIndexRoute,
  getApiV3AccountsAccountIdGroupsIndexRoute,
  postApiV3AccountsAccountIdAssignGroupsIndexRoute,
  postApiV3AccountsAccountIdGroupPermissionsGroupIdIndexRoute,
  postApiV3AccountsAccountIdGroupsIdIndexRoute,
  postApiV3AccountsAccountIdGroupsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(postApiV3AccountsAccountIdAssignGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdGroupPermissionsGroupIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
