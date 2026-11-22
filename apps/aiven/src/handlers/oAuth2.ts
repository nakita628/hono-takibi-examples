import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuth2Handler = app.openapi(getUserinfoRoute, (c) => {
  throw new Error('Not implemented')
})
