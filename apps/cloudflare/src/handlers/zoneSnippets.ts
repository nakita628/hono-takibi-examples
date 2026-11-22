import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdSnippetsSnippetNameRoute,
  deleteZonesZoneIdSnippetsSnippetRulesRoute,
  getZonesZoneIdSnippetsRoute,
  getZonesZoneIdSnippetsSnippetNameContentRoute,
  getZonesZoneIdSnippetsSnippetNameRoute,
  getZonesZoneIdSnippetsSnippetRulesRoute,
  putZonesZoneIdSnippetsSnippetNameRoute,
  putZonesZoneIdSnippetsSnippetRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneSnippetsHandler = app
  .openapi(getZonesZoneIdSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSnippetsSnippetRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSnippetsSnippetRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSnippetsSnippetRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdSnippetsSnippetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSnippetsSnippetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdSnippetsSnippetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSnippetsSnippetNameContentRoute, (c) => {
    throw new Error('Not implemented')
  })
