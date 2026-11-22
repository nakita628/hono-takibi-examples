import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2CsmSettingsAgentlessHostsFacetInfoRoute,
  getApiV2CsmSettingsAgentlessHostsFacetsRoute,
  getApiV2CsmSettingsAgentlessHostsRoute,
  getApiV2CsmSettingsHostsFacetInfoRoute,
  getApiV2CsmSettingsHostsFacetsRoute,
  getApiV2CsmSettingsHostsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const csmSettingsHandler = app
  .openapi(getApiV2CsmSettingsAgentlessHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CsmSettingsAgentlessHostsFacetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CsmSettingsAgentlessHostsFacetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CsmSettingsHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CsmSettingsHostsFacetInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CsmSettingsHostsFacetsRoute, (c) => {
    throw new Error('Not implemented')
  })
