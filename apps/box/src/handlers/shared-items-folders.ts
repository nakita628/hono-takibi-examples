import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedItemsFoldersRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedItemsFoldersHandler = app.openapi(getSharedItemsFoldersRoute, (c) => {
  throw new Error('Not implemented')
})
