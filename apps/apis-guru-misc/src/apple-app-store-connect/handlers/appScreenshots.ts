import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppScreenshotsIdRoute,
  getV1AppScreenshotsIdRoute,
  patchV1AppScreenshotsIdRoute,
  postV1AppScreenshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appScreenshotsHandler = app
  .openapi(postV1AppScreenshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppScreenshotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppScreenshotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppScreenshotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
