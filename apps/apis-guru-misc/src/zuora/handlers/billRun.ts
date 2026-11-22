import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectBillRunIdRoute,
  getV1ObjectBillRunIdRoute,
  postV1BillRunsBillRunIdEmailsRoute,
  postV1ObjectBillRunRoute,
  putV1ObjectBillRunIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billRunHandler = app
  .openapi(postV1BillRunsBillRunIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectBillRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectBillRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectBillRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectBillRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
