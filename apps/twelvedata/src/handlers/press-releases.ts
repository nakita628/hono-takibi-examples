import { OpenAPIHono } from '@hono/zod-openapi'
import { getPressReleasesRoute } from '../routes'

const app = new OpenAPIHono()

export const pressReleasesHandler = app.openapi(getPressReleasesRoute, (c) => {
  throw new Error('Not implemented')
})
