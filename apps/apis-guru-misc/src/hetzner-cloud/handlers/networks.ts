import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksIdRoute,
  getNetworksIdRoute,
  getNetworksRoute,
  postNetworksRoute,
  putNetworksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networksHandler = app
  .openapi(getNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
