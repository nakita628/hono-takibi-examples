import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityProtectionServicePrincipalRiskDetectionsServicePrincipalRiskDetectionIdRoute,
  getIdentityProtectionServicePrincipalRiskDetectionsRoute,
  getIdentityProtectionServicePrincipalRiskDetectionsServicePrincipalRiskDetectionIdRoute,
  patchIdentityProtectionServicePrincipalRiskDetectionsServicePrincipalRiskDetectionIdRoute,
  postIdentityProtectionServicePrincipalRiskDetectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProtectionServicePrincipalRiskDetectionHandler = app
  .openapi(getIdentityProtectionServicePrincipalRiskDetectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityProtectionServicePrincipalRiskDetectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityProtectionServicePrincipalRiskDetectionsServicePrincipalRiskDetectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityProtectionServicePrincipalRiskDetectionsServicePrincipalRiskDetectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityProtectionServicePrincipalRiskDetectionsServicePrincipalRiskDetectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
