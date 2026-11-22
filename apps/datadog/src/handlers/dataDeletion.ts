import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2DeletionRequestsRoute,
  postApiV2DeletionDataProductRoute,
  putApiV2DeletionRequestsIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataDeletionHandler = app
  .openapi(postApiV2DeletionDataProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeletionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DeletionRequestsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
