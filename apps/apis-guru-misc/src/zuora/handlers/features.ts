import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectFeatureIdRoute,
  getV1ObjectFeatureIdRoute,
  postV1ObjectFeatureRoute,
  putV1ObjectFeatureIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featuresHandler = app
  .openapi(postV1ObjectFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
