import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeRoute,
  deletePlansCodeEntitlementsFeatureCodeRoute,
  deleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeRoute,
  deleteSubscriptionsExternalIdEntitlementsFeatureCodeRoute,
  getPlansCodeEntitlementsFeatureCodeRoute,
  getPlansCodeEntitlementsRoute,
  getSubscriptionsExternalIdEntitlementsRoute,
  patchPlansCodeEntitlementsRoute,
  patchSubscriptionsExternalIdEntitlementsRoute,
  postPlansCodeEntitlementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entitlementsHandler = app
  .openapi(postPlansCodeEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansCodeEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlansCodeEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansCodeEntitlementsFeatureCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlansCodeEntitlementsFeatureCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscriptionsExternalIdEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionsExternalIdEntitlementsFeatureCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
