import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactFlowsInstanceIdContactFlowIdRoute,
  getContactFlowsInstanceIdContactFlowIdRoute,
  postContactFlowsInstanceIdContactFlowIdContentRoute,
  postContactFlowsInstanceIdContactFlowIdMetadataRoute,
  postContactFlowsInstanceIdContactFlowIdNameRoute,
  putContactFlowsInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactFlowsHandler = app
  .openapi(putContactFlowsInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactFlowsInstanceIdContactFlowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactFlowsInstanceIdContactFlowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactFlowsInstanceIdContactFlowIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactFlowsInstanceIdContactFlowIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactFlowsInstanceIdContactFlowIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
