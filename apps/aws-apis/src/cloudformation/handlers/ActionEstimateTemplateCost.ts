import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEstimateTemplateCostRoute, postActionEstimateTemplateCostRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionEstimateTemplateCostHandler = app
  .openapi(getActionEstimateTemplateCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEstimateTemplateCostRoute, (c) => {
    throw new Error('Not implemented')
  })
