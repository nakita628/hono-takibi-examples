import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2AccountActivitiesActivityTypeRoute, getV2AccountActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const accountActivitiesHandler = app
  .openapi(getV2AccountActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountActivitiesActivityTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
