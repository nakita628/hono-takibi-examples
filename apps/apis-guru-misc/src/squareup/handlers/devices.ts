import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2DevicesCodesIdRoute,
  getV2DevicesCodesRoute,
  postV2DevicesCodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getV2DevicesCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DevicesCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DevicesCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
