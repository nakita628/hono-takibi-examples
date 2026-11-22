import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiExtensionsRoute,
  getApiFeaturesRoute,
  getApiNodeReplacementsRoute,
  getApiObjectInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodeHandler = app
  .openapi(getApiExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNodeReplacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiObjectInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
