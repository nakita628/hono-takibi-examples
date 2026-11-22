import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2WalletsApplepaySessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const walletsAPIHandler = app.openapi(postV2WalletsApplepaySessionsRoute, (c) => {
  throw new Error('Not implemented')
})
