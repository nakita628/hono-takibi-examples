import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubscribedSkusSubscribedSkuIdRoute,
  getSubscribedSkusRoute,
  getSubscribedSkusSubscribedSkuIdRoute,
  patchSubscribedSkusSubscribedSkuIdRoute,
  postSubscribedSkusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscribedSkusSubscribedSkuHandler = app
  .openapi(getSubscribedSkusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscribedSkusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscribedSkusSubscribedSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscribedSkusSubscribedSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscribedSkusSubscribedSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
