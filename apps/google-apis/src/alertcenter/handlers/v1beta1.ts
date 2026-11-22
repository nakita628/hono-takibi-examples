import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1SettingsRoute, patchV1beta1SettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(getV1beta1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
