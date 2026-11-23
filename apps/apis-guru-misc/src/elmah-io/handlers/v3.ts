import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3DeploymentsIdRoute,
  deleteV3MessagesLogIdIdRoute,
  deleteV3MessagesLogIdRoute,
  getV3DeploymentsIdRoute,
  getV3DeploymentsRoute,
  getV3LogsIdDiagnoseRoute,
  getV3LogsIdRoute,
  getV3LogsRoute,
  getV3MessagesLogIdIdRoute,
  getV3MessagesLogIdRoute,
  getV3UptimechecksRoute,
  postV3DeploymentsRoute,
  postV3HeartbeatsLogIdIdRoute,
  postV3LogsIdDisableRoute,
  postV3LogsIdEnableRoute,
  postV3LogsRoute,
  postV3MessagesLogIdBulkRoute,
  postV3MessagesLogIdFixRoute,
  postV3MessagesLogIdIdFixRoute,
  postV3MessagesLogIdIdHideRoute,
  postV3MessagesLogIdRoute,
  postV3SourcemapsLogIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3DeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3DeploymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DeploymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3HeartbeatsLogIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsIdDiagnoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3LogsIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3LogsIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3MessagesLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3MessagesLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MessagesLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MessagesLogIdBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MessagesLogIdFixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3MessagesLogIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3MessagesLogIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MessagesLogIdIdFixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3MessagesLogIdIdHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SourcemapsLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3UptimechecksRoute, (c) => {
    throw new Error('Not implemented')
  })
