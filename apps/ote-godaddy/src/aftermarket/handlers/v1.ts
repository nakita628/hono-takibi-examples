import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1AftermarketListingsRoute, postV1AftermarketListingsExpiryRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1AftermarketListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AftermarketListingsExpiryRoute, (c) => {
    throw new Error('Not implemented')
  })
