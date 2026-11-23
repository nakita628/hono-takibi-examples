import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImageScanFindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const listImageScanFindingsHandler = app.openapi(postListImageScanFindingsRoute, (c) => {
  throw new Error('Not implemented')
})
