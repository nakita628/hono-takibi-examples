import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1ParentAdminsRoute,
  patchV1NameRoute,
  postV1NameTransferRoute,
  postV1ParentAdminsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
