import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImageScanFindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListImageScanFindingsHandler = app.openapi(postListImageScanFindingsRoute, (c) => {
  throw new Error('Not implemented')
})
