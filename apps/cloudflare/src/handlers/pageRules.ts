import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdPagerulesPageruleIdRoute,
  getZonesZoneIdPagerulesPageruleIdRoute,
  getZonesZoneIdPagerulesRoute,
  patchZonesZoneIdPagerulesPageruleIdRoute,
  postZonesZoneIdPagerulesRoute,
  putZonesZoneIdPagerulesPageruleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pageRulesHandler = app
  .openapi(getZonesZoneIdPagerulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdPagerulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdPagerulesPageruleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPagerulesPageruleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdPagerulesPageruleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdPagerulesPageruleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
