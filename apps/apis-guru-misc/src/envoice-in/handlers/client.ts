import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiClientAllRoute,
  getApiClientCandeleteRoute,
  getApiClientDetailsRoute,
  postApiClientDeleteRoute,
  postApiClientNewRoute,
  postApiClientUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientHandler = app
  .openapi(getApiClientAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClientCandeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClientDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
