import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdDevicesCountRoute,
  getApiV1OrgsOrgIdDevicesEventsCountRoute,
  getApiV1OrgsOrgIdDevicesEventsSearchRoute,
  getApiV1OrgsOrgIdDevicesLastConfigCountRoute,
  getApiV1OrgsOrgIdDevicesLastConfigSearchRoute,
  getApiV1OrgsOrgIdDevicesRadioMacsRoute,
  getApiV1OrgsOrgIdDevicesRoute,
  getApiV1OrgsOrgIdDevicesSearchRoute,
  getApiV1OrgsOrgIdDevicesUpgradeRoute,
  getApiV1OrgsOrgIdDevicesUpgradeUpgradeIdRoute,
  getApiV1OrgsOrgIdJunosRegisterCmdRoute,
  getApiV1OrgsOrgIdOcdevicesOutboundSshCmdRoute,
  getApiV1OrgsOrgIdSsrVersionsRoute,
  postApiV1OrgsOrgIdDevicesUpgradeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsDevicesHandler = app
  .openapi(getApiV1OrgsOrgIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesLastConfigCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesLastConfigSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesRadioMacsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdDevicesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesUpgradeUpgradeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdJunosRegisterCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdOcdevicesOutboundSshCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsrVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
