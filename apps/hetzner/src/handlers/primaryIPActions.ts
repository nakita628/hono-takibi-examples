import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPrimaryIpsActionsIdRoute,
  getPrimaryIpsActionsRoute,
  getPrimaryIpsIdActionsActionIdRoute,
  getPrimaryIpsIdActionsRoute,
  postPrimaryIpsIdActionsAssignRoute,
  postPrimaryIpsIdActionsChangeDnsPtrRoute,
  postPrimaryIpsIdActionsChangeProtectionRoute,
  postPrimaryIpsIdActionsUnassignRoute,
} from '../routes'

const app = new OpenAPIHono()

export const primaryIPActionsHandler = app
  .openapi(getPrimaryIpsActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrimaryIpsActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrimaryIpsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrimaryIpsIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrimaryIpsIdActionsAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrimaryIpsIdActionsChangeDnsPtrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrimaryIpsIdActionsChangeProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrimaryIpsIdActionsUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
