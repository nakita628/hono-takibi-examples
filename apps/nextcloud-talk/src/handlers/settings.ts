import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsSpreedApiApiVersionBotAdminRoute,
  getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationRoute,
  getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionSettingsSipRoute,
  postOcsV2PhpAppsSpreedApiApiVersionSettingsUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionSettingsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionBotAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionSettingsSipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
