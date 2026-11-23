import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSimCardGroupsIdRoute,
  getSimCardGroupsIdRoute,
  getSimCardGroupsRoute,
  patchSimCardGroupsIdRoute,
  postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRoute,
  postSimCardGroupsIdActionsSetPrivateWirelessGatewayRoute,
  postSimCardGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simCardGroupsHandler = app
  .openapi(getSimCardGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSimCardGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSimCardGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCardGroupsIdActionsSetPrivateWirelessGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
