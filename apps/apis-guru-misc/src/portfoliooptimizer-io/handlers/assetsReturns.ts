import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssetsReturnsAverageRoute, postAssetsReturnsRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsReturnsHandler = app
  .openapi(postAssetsReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsReturnsAverageRoute, (c) => {
    throw new Error('Not implemented')
  })
