import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDebugNodeLogLevelRoute,
  putDebugClusterControlPlanesNodesLogLevelLogLevelRoute,
  putDebugClusterLogLevelLogLevelRoute,
  putDebugNodeLogLevelLogLevelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const debugHandler = app
  .openapi(putDebugClusterControlPlanesNodesLogLevelLogLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDebugClusterLogLevelLogLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugNodeLogLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDebugNodeLogLevelLogLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
