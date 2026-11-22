import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityProtectionRiskDetectionsRiskDetectionIdRoute,
  getIdentityProtectionRiskDetectionsRiskDetectionIdRoute,
  getIdentityProtectionRiskDetectionsRoute,
  patchIdentityProtectionRiskDetectionsRiskDetectionIdRoute,
  postIdentityProtectionRiskDetectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProtectionRiskDetectionHandler = app
  .openapi(getIdentityProtectionRiskDetectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityProtectionRiskDetectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityProtectionRiskDetectionsRiskDetectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProtectionRiskDetectionsRiskDetectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityProtectionRiskDetectionsRiskDetectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
