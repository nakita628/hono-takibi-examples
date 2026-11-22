import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute,
  getZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute,
  getZonesZoneIdLeakedCredentialChecksDetectionsRoute,
  getZonesZoneIdLeakedCredentialChecksRoute,
  postZonesZoneIdLeakedCredentialChecksDetectionsRoute,
  postZonesZoneIdLeakedCredentialChecksRoute,
  putZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leakedCredentialChecksHandler = app
  .openapi(getZonesZoneIdLeakedCredentialChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLeakedCredentialChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLeakedCredentialChecksDetectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdLeakedCredentialChecksDetectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
