import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauth2V2UserinfoRoute, getUserinfoV2MeRoute } from '../routes'

const app = new OpenAPIHono()

export const userinfoHandler = app
  .openapi(getOauth2V2UserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserinfoV2MeRoute, (c) => {
    throw new Error('Not implemented')
  })
