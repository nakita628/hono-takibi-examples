import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdAccessServiceTokensServiceTokenIdRoute,
  getZonesZoneIdAccessServiceTokensRoute,
  getZonesZoneIdAccessServiceTokensServiceTokenIdRoute,
  postZonesZoneIdAccessServiceTokensRoute,
  putZonesZoneIdAccessServiceTokensServiceTokenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneLevelAccessServiceTokensHandler = app
  .openapi(getZonesZoneIdAccessServiceTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdAccessServiceTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdAccessServiceTokensServiceTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAccessServiceTokensServiceTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdAccessServiceTokensServiceTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
