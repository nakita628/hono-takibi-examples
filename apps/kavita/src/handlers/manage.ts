import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiManageMatchedSeriesCountsRoute, postApiManageSeriesMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const manageHandler = app
  .openapi(postApiManageSeriesMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiManageMatchedSeriesCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
