import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4EventlogAuditsNodeInfoRoute,
  getV4EventlogAuditsNodesRoute,
  getV4EventlogEventsRoute,
  getV4EventlogOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventlogHandler = app
  .openapi(getV4EventlogAuditsNodeInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4EventlogAuditsNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4EventlogEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4EventlogOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
