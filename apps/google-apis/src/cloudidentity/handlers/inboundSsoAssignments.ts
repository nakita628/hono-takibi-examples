import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1InboundSsoAssignmentsRoute,
  getV1beta1NameRoute,
  patchV1beta1NameRoute,
  postV1beta1InboundSsoAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboundSsoAssignmentsHandler = app
  .openapi(getV1beta1InboundSsoAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1InboundSsoAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
