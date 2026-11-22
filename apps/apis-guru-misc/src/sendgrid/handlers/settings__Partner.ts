import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPartnerSettingsNewRelicRoute,
  getPartnerSettingsRoute,
  patchPartnerSettingsNewRelicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settings__PartnerHandler = app
  .openapi(getPartnerSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPartnerSettingsNewRelicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPartnerSettingsNewRelicRoute, (c) => {
    throw new Error('Not implemented')
  })
