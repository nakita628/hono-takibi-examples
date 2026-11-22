import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2RemoteConfigProductsRumConfigsConfigIdRoute,
  putApiV2RemoteConfigProductsRumConfigsConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumRemoteConfigHandler = app
  .openapi(getApiV2RemoteConfigProductsRumConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RemoteConfigProductsRumConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
