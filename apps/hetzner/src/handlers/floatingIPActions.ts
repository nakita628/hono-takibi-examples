import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFloatingIpsActionsIdRoute,
  getFloatingIpsActionsRoute,
  getFloatingIpsIdActionsActionIdRoute,
  getFloatingIpsIdActionsRoute,
  postFloatingIpsIdActionsAssignRoute,
  postFloatingIpsIdActionsChangeDnsPtrRoute,
  postFloatingIpsIdActionsChangeProtectionRoute,
  postFloatingIpsIdActionsUnassignRoute,
} from '../routes'

const app = new OpenAPIHono()

export const floatingIPActionsHandler = app
  .openapi(getFloatingIpsActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFloatingIpsActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFloatingIpsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFloatingIpsIdActionsAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFloatingIpsIdActionsChangeDnsPtrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFloatingIpsIdActionsChangeProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFloatingIpsIdActionsUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFloatingIpsIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
