import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPrimaryIpsIdActionsAssignRoute,
  postPrimaryIpsIdActionsChangeDnsPtrRoute,
  postPrimaryIpsIdActionsChangeProtectionRoute,
  postPrimaryIpsIdActionsUnassignRoute,
} from '../routes'

const app = new OpenAPIHono()

export const primaryIPActionsHandler = app
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
