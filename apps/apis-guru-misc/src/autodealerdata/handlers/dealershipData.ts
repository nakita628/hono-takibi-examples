import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetDealersByIDRoute, getGetDealersByRegionRoute, getGetDealersRoute } from '../routes'

const app = new OpenAPIHono()

export const dealershipDataHandler = app
  .openapi(getGetDealersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetDealersByIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetDealersByRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
