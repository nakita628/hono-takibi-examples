import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrimaryIpsIdRoute,
  getPrimaryIpsActionsIdRoute,
  getPrimaryIpsActionsRoute,
  getPrimaryIpsIdActionsActionIdRoute,
  getPrimaryIpsIdActionsRoute,
  getPrimaryIpsIdRoute,
  getPrimaryIpsRoute,
  postPrimaryIpsIdActionsAssignRoute,
  postPrimaryIpsIdActionsChangeDnsPtrRoute,
  postPrimaryIpsIdActionsChangeProtectionRoute,
  postPrimaryIpsIdActionsUnassignRoute,
  postPrimaryIpsRoute,
  putPrimaryIpsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const primaryIpsHandler = app
  .openapi(getPrimaryIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrimaryIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getPrimaryIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrimaryIpsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrimaryIpsIdRoute, (c) => {
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
