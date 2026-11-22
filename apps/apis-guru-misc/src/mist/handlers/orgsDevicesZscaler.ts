import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1OrgsOrgIdSettingZscalerSetupRoute } from '../routes'

const app = new OpenAPIHono()

export const orgsDevicesZscalerHandler = app.openapi(
  postApiV1OrgsOrgIdSettingZscalerSetupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
