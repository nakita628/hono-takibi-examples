import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBundlesIdRoute,
  getBundlesIdRoute,
  getBundlesRoute,
  patchBundlesIdRoute,
  postBundlesIdShareRoute,
  postBundlesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bundlesHandler = app
  .openapi(getBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBundlesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBundlesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBundlesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBundlesIdShareRoute, (c) => {
    throw new Error('Not implemented')
  })
