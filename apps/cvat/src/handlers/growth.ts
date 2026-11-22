import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiGrowthIdRoute, getApiGrowthRoute, patchApiGrowthIdRoute } from '../routes'

const app = new OpenAPIHono()

export const growthHandler = app
  .openapi(getApiGrowthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGrowthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGrowthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
