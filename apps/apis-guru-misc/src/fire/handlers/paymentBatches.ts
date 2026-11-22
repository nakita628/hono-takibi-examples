import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BatchesBatchUuidBanktransfersItemUuidRoute,
  deleteV1BatchesBatchUuidInternaltransfersItemUuidRoute,
  deleteV1BatchesBatchUuidRoute,
  getV1BatchesBatchUuidApprovalsRoute,
  getV1BatchesBatchUuidBanktransfersRoute,
  getV1BatchesBatchUuidInternaltransfersRoute,
  getV1BatchesBatchUuidRoute,
  getV1BatchesRoute,
  postV1BatchesBatchUuidBanktransfersRoute,
  postV1BatchesBatchUuidInternaltransfersRoute,
  postV1BatchesRoute,
  putV1BatchesBatchUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentBatchesHandler = app
  .openapi(getV1BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BatchesBatchUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BatchesBatchUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchUuidApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchUuidBanktransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchUuidBanktransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BatchesBatchUuidBanktransfersItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchUuidInternaltransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchUuidInternaltransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BatchesBatchUuidInternaltransfersItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
