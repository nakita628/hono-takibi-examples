import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ReportIdRoute,
  deleteV1SloIdRoute,
  getV1ReportIdRoute,
  getV1ReportRoute,
  getV1SloIdRoute,
  getV1SloRoute,
  postV1ReportRoute,
  postV1SloRoute,
  putV1ReportIdRoute,
  putV1SloIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1ReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SloIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SloIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SloIdRoute, (c) => {
    throw new Error('Not implemented')
  })
