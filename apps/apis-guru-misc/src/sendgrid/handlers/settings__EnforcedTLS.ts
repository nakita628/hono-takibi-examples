import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserSettingsEnforcedTlsRoute, patchUserSettingsEnforcedTlsRoute } from '../routes'

const app = new OpenAPIHono()

export const settings__EnforcedTLSHandler = app
  .openapi(getUserSettingsEnforcedTlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserSettingsEnforcedTlsRoute, (c) => {
    throw new Error('Not implemented')
  })
