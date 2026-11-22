import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute,
  deleteFeatureFlags202609AppIdFlagsFlagNameRoute,
  getFeatureFlags202609AppIdFlagsAllRoute,
  getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute,
  getFeatureFlags202609AppIdFlagsFlagNamePortalsRoute,
  getFeatureFlags202609AppIdFlagsFlagNameRoute,
  putFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute,
  putFeatureFlags202609AppIdFlagsFlagNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getFeatureFlags202609AppIdFlagsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeatureFlags202609AppIdFlagsFlagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeatureFlags202609AppIdFlagsFlagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFeatureFlags202609AppIdFlagsFlagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeatureFlags202609AppIdFlagsFlagNamePortalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFeatureFlags202609AppIdFlagsFlagNamePortalsPortalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
