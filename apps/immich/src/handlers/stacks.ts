import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStacksIdAssetsAssetIdRoute,
  deleteStacksIdRoute,
  deleteStacksRoute,
  getStacksIdRoute,
  getStacksRoute,
  postStacksRoute,
  putStacksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stacksHandler = app
  .openapi(deleteStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStacksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStacksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStacksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStacksIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
