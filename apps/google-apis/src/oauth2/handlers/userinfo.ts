import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserinfoV2MeRoute } from '../routes'

const app = new OpenAPIHono()

export const userinfoHandler = app.openapi(getUserinfoV2MeRoute, (c) => {
  throw new Error('Not implemented')
})
