import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2DlqDlqIdRoute,
  deleteV2DlqRoute,
  getV2DlqDlqIdRoute,
  getV2DlqRoute,
  postV2DlqRetryDlqIdRoute,
  postV2DlqRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlqHandler = app
  .openapi(getV2DlqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DlqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DlqDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DlqDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DlqRetryDlqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DlqRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
