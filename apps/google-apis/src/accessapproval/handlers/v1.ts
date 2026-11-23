import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentApprovalRequestsRoute,
  patchV1NameRoute,
  postV1NameApproveRoute,
  postV1NameDismissRoute,
  postV1NameInvalidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
