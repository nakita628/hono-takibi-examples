import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRcsAgentsIdTestDevicesTestDeviceIdRoute,
  getRcsAgentsIdCarrierApprovalsRoute,
  getRcsAgentsIdRoute,
  getRcsAgentsIdTestDevicesRoute,
  getRcsAgentsRoute,
  patchRcsAgentsIdRoute,
  postRcsAgentsIdLaunchRoute,
  postRcsAgentsIdSubmitRoute,
  postRcsAgentsIdTestDevicesRoute,
  postRcsAgentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rcsAgentsHandler = app
  .openapi(getRcsAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRcsAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRcsAgentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRcsAgentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRcsAgentsIdCarrierApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRcsAgentsIdLaunchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRcsAgentsIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRcsAgentsIdTestDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRcsAgentsIdTestDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRcsAgentsIdTestDevicesTestDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
