import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFloatingIpsIdRoute,
  getFloatingIpsIdActionsActionIdRoute,
  getFloatingIpsIdActionsRoute,
  getFloatingIpsIdRoute,
  getFloatingIpsRoute,
  postFloatingIpsIdActionsAssignRoute,
  postFloatingIpsIdActionsChangeDnsPtrRoute,
  postFloatingIpsIdActionsChangeProtectionRoute,
  postFloatingIpsIdActionsUnassignRoute,
  postFloatingIpsRoute,
  putFloatingIpsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const floatingIpsHandler = app
  .openapi(getFloatingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFloatingIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFloatingIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFloatingIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFloatingIpsIdRoute, (c) => {
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
