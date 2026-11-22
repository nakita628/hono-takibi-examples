import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1RegistryRoute } from '../routes'

const app = new OpenAPIHono()

export const registryHandler = app.openapi(getApiV1RegistryRoute, (c) => {
  throw new Error('Not implemented')
})
