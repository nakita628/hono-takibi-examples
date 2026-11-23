import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionExportTransitGatewayRoutesRoute,
  postActionExportTransitGatewayRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionExportTransitGatewayRoutesHandler = app
  .openapi(getActionExportTransitGatewayRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionExportTransitGatewayRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
