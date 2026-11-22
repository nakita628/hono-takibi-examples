import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedImageFillsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedImageFillsHandler = app.openapi(getSharedImageFillsIdRoute, (c) => {
  throw new Error('Not implemented')
})
