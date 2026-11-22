import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1IntegrationsLogDrainsIdRoute,
  deleteV1LogDrainsIdRoute,
  getV1LogDrainsIdRoute,
  getV1LogDrainsRoute,
  getV2IntegrationsLogDrainsRoute,
  postV1LogDrainsRoute,
  postV2IntegrationsLogDrainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logDrainsHandler = app
  .openapi(deleteV1IntegrationsLogDrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1LogDrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LogDrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2IntegrationsLogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2IntegrationsLogDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
