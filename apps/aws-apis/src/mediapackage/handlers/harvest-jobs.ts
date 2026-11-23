import { OpenAPIHono } from '@hono/zod-openapi'
import { getHarvestJobsIdRoute, getHarvestJobsRoute, postHarvestJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const harvestJobsHandler = app
  .openapi(postHarvestJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHarvestJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHarvestJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
