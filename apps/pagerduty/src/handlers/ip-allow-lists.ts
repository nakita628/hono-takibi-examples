import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpAllowListsIdRoute,
  getIpAllowListsIdAuditRecordsRoute,
  getIpAllowListsIdRoute,
  getIpAllowListsRoute,
  postIpAllowListsRoute,
  putIpAllowListsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAllowListsHandler = app
  .openapi(postIpAllowListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpAllowListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpAllowListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpAllowListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpAllowListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpAllowListsIdAuditRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
