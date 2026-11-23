import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TenantRestaurantsIdEventOfflineRoute,
  postV1TenantRestaurantsEventOfflineRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1TenantRestaurantsEventOfflineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TenantRestaurantsIdEventOfflineRoute, (c) => {
    throw new Error('Not implemented')
  })
