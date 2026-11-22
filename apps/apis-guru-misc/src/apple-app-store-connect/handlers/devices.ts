import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DevicesIdRoute,
  getV1DevicesRoute,
  patchV1DevicesIdRoute,
  postV1DevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getV1DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
