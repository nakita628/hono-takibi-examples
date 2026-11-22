import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDistrictDistrictKeyEventsKeysRoute,
  getDistrictDistrictKeyEventsRoute,
  getDistrictDistrictKeyEventsSimpleRoute,
  getDistrictDistrictKeyRankingsRoute,
  getDistrictDistrictKeyTeamsKeysRoute,
  getDistrictDistrictKeyTeamsRoute,
  getDistrictDistrictKeyTeamsSimpleRoute,
  getDistrictsYearRoute,
} from '../routes'

const app = new OpenAPIHono()

export const districtHandler = app
  .openapi(getDistrictDistrictKeyEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictDistrictKeyEventsKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictDistrictKeyEventsSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictDistrictKeyRankingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictDistrictKeyTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictDistrictKeyTeamsKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictDistrictKeyTeamsSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistrictsYearRoute, (c) => {
    throw new Error('Not implemented')
  })
