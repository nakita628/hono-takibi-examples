import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1DevicesRoute,
  getV1beta1ParentDeviceUsersRoute,
  getV1beta1ParentLookupRoute,
  postV1beta1DevicesRoute,
  postV1beta1NameApproveRoute,
  postV1beta1NameBlockRoute,
  postV1beta1NameCancelWipeRoute,
  postV1beta1NameWipeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getV1beta1DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentDeviceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
