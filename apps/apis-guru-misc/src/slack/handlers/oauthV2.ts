import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauthV2AccessRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthV2Handler = app.openapi(getOauthV2AccessRoute, (c) => {
  throw new Error('Not implemented')
})
