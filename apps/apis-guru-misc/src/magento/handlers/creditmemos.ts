import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CreditmemosRoute } from '../routes'

const app = new OpenAPIHono()

export const creditmemosHandler = app.openapi(getV1CreditmemosRoute, (c) => {
  throw new Error('Not implemented')
})
