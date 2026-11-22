import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthDeviceCodeRoute, postOauthDeviceTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authentication__DevicesHandler = app
  .openapi(postOauthDeviceCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthDeviceTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
