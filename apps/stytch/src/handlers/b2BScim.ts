import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1B2bScimOrganizationIdConnectionConnectionIdRoute,
  getV1B2bScimOrganizationIdConnectionConnectionIdRoute,
  getV1B2bScimOrganizationIdConnectionRoute,
  postV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelRoute,
  postV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteRoute,
  postV1B2bScimOrganizationIdConnectionConnectionIdRotateStartRoute,
  postV1B2bScimOrganizationIdConnectionRoute,
  putV1B2bScimOrganizationIdConnectionConnectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const b2BScimHandler = app
  .openapi(putV1B2bScimOrganizationIdConnectionConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1B2bScimOrganizationIdConnectionConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bScimOrganizationIdConnectionConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bScimOrganizationIdConnectionConnectionIdRotateStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bScimOrganizationIdConnectionConnectionIdRotateCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bScimOrganizationIdConnectionConnectionIdRotateCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bScimOrganizationIdConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bScimOrganizationIdConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
