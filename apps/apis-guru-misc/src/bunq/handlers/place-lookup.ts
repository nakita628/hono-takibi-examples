import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlaceLookupPlaceLookupIDPhotoPhotoIDContentRoute } from '../routes'

const app = new OpenAPIHono()

export const placeLookupHandler = app.openapi(
  getPlaceLookupPlaceLookupIDPhotoPhotoIDContentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
