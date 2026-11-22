import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1InfoRoute,
  getApiV2NodeInstancesRoute,
  getApiV2NodesRoute,
  getApiV3InfoRoute,
  getApiV3NodeInstancesRoute,
  getApiV3NodesRoute,
  getApiV3StreamPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodesHandler = app
  .openapi(getApiV2NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3InfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NodeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3StreamPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2NodeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
