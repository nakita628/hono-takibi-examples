import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const userinfoHandler = app.openapi(getUserinfoRoute, (c) => {
  throw new Error('Not implemented')
})
