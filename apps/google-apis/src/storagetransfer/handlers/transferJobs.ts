import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1JobNameRoute,
  getV1JobNameRoute,
  getV1TransferJobsRoute,
  patchV1JobNameRoute,
  postV1JobNameRunRoute,
  postV1TransferJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferJobsHandler = app
  .openapi(getV1TransferJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransferJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1JobNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JobNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1JobNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobNameRunRoute, (c) => {
    throw new Error('Not implemented')
  })
