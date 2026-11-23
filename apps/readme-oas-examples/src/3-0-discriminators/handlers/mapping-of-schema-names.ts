import { OpenAPIHono } from '@hono/zod-openapi'
import { patchMappingOfSchemaNamesRoute } from '../routes'

const app = new OpenAPIHono()

export const mappingOfSchemaNamesHandler = app.openapi(patchMappingOfSchemaNamesRoute, (c) => {
  throw new Error('Not implemented')
})
