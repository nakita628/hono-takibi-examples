import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FormsFormIdWatchesWatchIdRoute,
  getV1FormsFormIdResponsesResponseIdRoute,
  getV1FormsFormIdResponsesRoute,
  getV1FormsFormIdRoute,
  getV1FormsFormIdWatchesRoute,
  postV1FormsFormIdBatchUpdateRoute,
  postV1FormsFormIdWatchesRoute,
  postV1FormsFormIdWatchesWatchIdRenewRoute,
  postV1FormsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formsHandler = app
  .openapi(postV1FormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FormsFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FormsFormIdResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FormsFormIdResponsesResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FormsFormIdWatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FormsFormIdWatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FormsFormIdWatchesWatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FormsFormIdWatchesWatchIdRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FormsFormIdBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
