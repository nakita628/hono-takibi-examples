import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1ReceiptsIdRoute,
  getApi1ReceiptsIdDownloadRoute,
  getApi1ReceiptsIdRoute,
  getApi1ReceiptsRoute,
  postApi1ReceiptsRoute,
  putApi1ReceiptsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const receiptsHandler = app
  .openapi(getApi1ReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReceiptsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
