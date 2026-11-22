import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute,
  getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute,
  getAdminDirectoryV1CustomerCustomerIdOrgunitsRoute,
  patchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute,
  postAdminDirectoryV1CustomerCustomerIdOrgunitsRoute,
  putAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgunitsHandler = app
  .openapi(getAdminDirectoryV1CustomerCustomerIdOrgunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdOrgunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
