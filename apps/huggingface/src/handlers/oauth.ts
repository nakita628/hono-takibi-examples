import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthUserinfoRoute,
  postOauthDeviceRoute,
  postOauthRegisterRoute,
  postOauthUserinfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postOauthRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthUserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthUserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
