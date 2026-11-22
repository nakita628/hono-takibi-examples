import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdJsiDevicesOutboundSshCmdRoute,
  getApiV1OrgsOrgIdJsiDevicesRoute,
  getApiV1OrgsOrgIdJsiInventoryRoute,
  postApiV1OrgsOrgIdJsiDevicesDeviceMacShellRoute,
  postApiV1OrgsOrgIdJsiDevicesDeviceMacUpgradeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsJSIHandler = app
  .openapi(getApiV1OrgsOrgIdJsiDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdJsiDevicesOutboundSshCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdJsiDevicesDeviceMacShellRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdJsiDevicesDeviceMacUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdJsiInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
