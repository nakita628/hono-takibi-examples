import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdCustomPagesIdentifierRoute,
  getZonesZoneIdCustomPagesRoute,
  postZonesZoneIdCustomPagesPreviewTokensRoute,
  putZonesZoneIdCustomPagesIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customPagesForAZoneHandler = app
  .openapi(getZonesZoneIdCustomPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdCustomPagesPreviewTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCustomPagesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdCustomPagesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
