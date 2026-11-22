import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdHealthchecksHealthcheckIdRoute,
  deleteZonesZoneIdHealthchecksPreviewHealthcheckIdRoute,
  deleteZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute,
  getZonesZoneIdHealthchecksHealthcheckIdRoute,
  getZonesZoneIdHealthchecksPreviewHealthcheckIdRoute,
  getZonesZoneIdHealthchecksRoute,
  getZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute,
  getZonesZoneIdSmartShieldHealthchecksRoute,
  patchZonesZoneIdHealthchecksHealthcheckIdRoute,
  patchZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute,
  postZonesZoneIdHealthchecksPreviewRoute,
  postZonesZoneIdHealthchecksRoute,
  postZonesZoneIdSmartShieldHealthchecksRoute,
  putZonesZoneIdHealthchecksHealthcheckIdRoute,
  putZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const healthChecksHandler = app
  .openapi(getZonesZoneIdHealthchecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdHealthchecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdHealthchecksPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdHealthchecksPreviewHealthcheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdHealthchecksPreviewHealthcheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdHealthchecksHealthcheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdHealthchecksHealthcheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdHealthchecksHealthcheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdHealthchecksHealthcheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSmartShieldHealthchecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdSmartShieldHealthchecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
