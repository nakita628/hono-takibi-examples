import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdSettingsNelRoute, patchZonesZoneIdSettingsNelRoute } from '../routes'

const app = new OpenAPIHono()

export const nelSettingsHandler = app
  .openapi(getZonesZoneIdSettingsNelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSettingsNelRoute, (c) => {
    throw new Error('Not implemented')
  })
