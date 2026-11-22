import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssetsReturnsSimulationBootstrapRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsReturnsSimulationHandler = app.openapi(
  postAssetsReturnsSimulationBootstrapRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
