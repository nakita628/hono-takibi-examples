import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsageplansUsageplanIdKeysKeyIdRoute,
  deleteUsageplansUsageplanIdRoute,
  getUsageplansRoute,
  getUsageplansUsageplanIdKeysKeyIdRoute,
  getUsageplansUsageplanIdKeysRoute,
  getUsageplansUsageplanIdRoute,
  getUsageplansUsageplanIdUsageStartDateEndDateRoute,
  patchUsageplansUsageplanIdKeysKeyIdUsageRoute,
  patchUsageplansUsageplanIdRoute,
  postUsageplansRoute,
  postUsageplansUsageplanIdKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usageplansHandler = app
  .openapi(postUsageplansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsageplansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsageplansUsageplanIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsageplansUsageplanIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsageplansUsageplanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsageplansUsageplanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsageplansUsageplanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsageplansUsageplanIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsageplansUsageplanIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsageplansUsageplanIdUsageStartDateEndDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsageplansUsageplanIdKeysKeyIdUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
