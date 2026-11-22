import { OpenAPIHono } from '@hono/zod-openapi'
import { putApiV1OrgsOrgIdSdkclientsSdkclientIdRoute } from '../routes'

const app = new OpenAPIHono()

export const orgsSDKClientsHandler = app.openapi(
  putApiV1OrgsOrgIdSdkclientsSdkclientIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
