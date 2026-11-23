import { OpenAPIHono } from '@hono/zod-openapi'
import { patchRedoclyFlavoredDiscriminatorRoute } from '../routes'

const app = new OpenAPIHono()

export const redoclyFlavoredDiscriminatorHandler = app.openapi(
  patchRedoclyFlavoredDiscriminatorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
