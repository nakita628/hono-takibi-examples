import { OpenAPIHono } from '@hono/zod-openapi'
import { patchImproperDiscriminatorPlacementRoute } from '../routes'

const app = new OpenAPIHono()

export const improperDiscriminatorPlacementHandler = app.openapi(
  patchImproperDiscriminatorPlacementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
