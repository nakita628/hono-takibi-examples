import { OpenAPIHono } from '@hono/zod-openapi'
import { putApiStorageProfileSystemProfilesSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const schemasHandler = app.openapi(putApiStorageProfileSystemProfilesSchemaRoute, (c) => {
  throw new Error('Not implemented')
})
