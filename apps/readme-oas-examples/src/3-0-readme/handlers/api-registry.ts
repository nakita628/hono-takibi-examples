import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiRegistryUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const apiRegistryHandler = app.openapi(getApiRegistryUuidRoute, (c) => {
  throw new Error('Not implemented')
})
