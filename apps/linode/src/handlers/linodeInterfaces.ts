import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute,
  getApiVersionLinodeInstancesLinodeIdInterfacesHistoryRoute,
  getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewallsRoute,
  getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute,
  getApiVersionLinodeInstancesLinodeIdInterfacesRoute,
  getApiVersionLinodeInstancesLinodeIdInterfacesSettingsRoute,
  postApiVersionLinodeInstancesLinodeIdInterfacesRoute,
  postApiVersionLinodeInstancesLinodeIdUpgradeInterfacesRoute,
  putApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute,
  putApiVersionLinodeInstancesLinodeIdInterfacesSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linodeInterfacesHandler = app
  .openapi(postApiVersionLinodeInstancesLinodeIdInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdInterfacesHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdInterfacesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdInterfacesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdUpgradeInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
