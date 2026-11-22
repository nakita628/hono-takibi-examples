import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BatchesBatchIdRoute,
  getV1BatchesBatchIdErrorsRoute,
  getV1BatchesBatchIdRoute,
  getV1BatchesExternalBatchIdExternalBatchIdRoute,
  getV1BatchesRoute,
  postV1BatchesBatchIdAddRoute,
  postV1BatchesBatchIdProcessLabelsRoute,
  postV1BatchesBatchIdRemoveRoute,
  postV1BatchesRoute,
  putV1BatchesBatchIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchesHandler = app
  .openapi(getV1BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesExternalBatchIdExternalBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchIdAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchIdErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchIdProcessLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
