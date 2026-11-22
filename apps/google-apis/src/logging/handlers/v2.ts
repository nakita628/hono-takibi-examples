import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2NameCmekSettingsRoute,
  getV2NameSettingsRoute,
  patchV2NameCmekSettingsRoute,
  patchV2NameSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2NameCmekSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameCmekSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
