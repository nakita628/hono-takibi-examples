import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDisplayAdsIdRoute,
  getApiDisplayAdsRoute,
  postApiDisplayAdsRoute,
  putApiDisplayAdsIdRoute,
  putApiDisplayAdsIdUnpublishRoute,
} from '../routes'

const app = new OpenAPIHono()

export const displayAdsHandler = app
  .openapi(getApiDisplayAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDisplayAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDisplayAdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDisplayAdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDisplayAdsIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
