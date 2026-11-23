import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasClickhouseNameRoute,
  deleteDbaasClickhouseServiceNameRoleRoleUuidRoute,
  deleteDbaasClickhouseServiceNameUserUserUuidRoute,
  getDbaasClickhouseNameRoute,
  getDbaasClickhouseServiceNameAclConfigRoute,
  getDbaasClickhouseServiceNameRoleRoute,
  getDbaasClickhouseServiceNameUserRoute,
  getDbaasClickhouseServiceNameUserUsernamePasswordRevealRoute,
  postDbaasClickhouseNameRoute,
  postDbaasClickhouseServiceNameUserRoute,
  putDbaasClickhouseNameMaintenanceStartRoute,
  putDbaasClickhouseNameRoute,
  putDbaasClickhouseServiceNameUserUsernamePasswordResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasClickhouseHandler = app
  .openapi(deleteDbaasClickhouseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasClickhouseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasClickhouseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasClickhouseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasClickhouseServiceNameRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasClickhouseServiceNameRoleRoleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasClickhouseServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasClickhouseServiceNameAclConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasClickhouseServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasClickhouseServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasClickhouseServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasClickhouseServiceNameUserUserUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasClickhouseNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
