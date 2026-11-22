import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1TransfersId4nSendInfoRoute,
  putApiV1TransfersId4nReceiveInfoRoute,
  putApiV1TransfersId4nSendInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferHandler = app
  .openapi(putApiV1TransfersId4nReceiveInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TransfersId4nSendInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TransfersId4nSendInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
