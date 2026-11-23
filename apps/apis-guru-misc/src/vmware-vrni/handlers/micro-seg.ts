import { OpenAPIHono } from '@hono/zod-openapi'
import { postMicroSegRecommendedRulesNsxRoute, postMicroSegRecommendedRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const microSegHandler = app
  .openapi(postMicroSegRecommendedRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMicroSegRecommendedRulesNsxRoute, (c) => {
    throw new Error('Not implemented')
  })
