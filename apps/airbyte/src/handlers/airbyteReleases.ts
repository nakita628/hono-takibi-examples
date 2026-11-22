import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1AirbyteReleasesCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const airbyteReleasesHandler = app.openapi(postV1AirbyteReleasesCreateRoute, (c) => {
  throw new Error('Not implemented')
})
