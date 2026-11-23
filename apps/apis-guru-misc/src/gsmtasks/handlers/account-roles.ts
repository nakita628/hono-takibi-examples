import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountRolesIdIndexRoute,
  getAccountRolesIdIndexRoute,
  getAccountRolesIdTokenIndexRoute,
  getAccountRolesIndexRoute,
  patchAccountRolesIdIndexRoute,
  postAccountRolesIdActivateIndexRoute,
  postAccountRolesIdNotifyIndexRoute,
  postAccountRolesIndexRoute,
  putAccountRolesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountRolesHandler = app
  .openapi(getAccountRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRolesIdActivateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRolesIdNotifyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountRolesIdTokenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
