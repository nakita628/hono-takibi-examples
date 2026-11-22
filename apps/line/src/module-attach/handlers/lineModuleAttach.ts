import { OpenAPIHono } from '@hono/zod-openapi'
import { postModuleAuthV1TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const lineModuleAttachHandler = app.openapi(postModuleAuthV1TokenRoute, (c) => {
  throw new Error('Not implemented')
})
