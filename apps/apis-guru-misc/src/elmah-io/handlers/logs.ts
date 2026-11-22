import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3LogsIdDiagnoseRoute,
  getV3LogsIdRoute,
  getV3LogsRoute,
  postV3LogsIdDisableRoute,
  postV3LogsIdEnableRoute,
  postV3LogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
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
