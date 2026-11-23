import { OpenAPIHono } from '@hono/zod-openapi'
import { getGlossaryPageNameMediaTypeExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const glossaryHandler = app.openapi(getGlossaryPageNameMediaTypeExtensionRoute, (c) => {
  throw new Error('Not implemented')
})
