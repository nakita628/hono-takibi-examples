import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2CustomerShortNamePhotoDownloadRoute } from '../routes'

const app = new OpenAPIHono()

export const photoControllerHandler = app.openapi(getV2CustomerShortNamePhotoDownloadRoute, (c) => {
  throw new Error('Not implemented')
})
