import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2DealersDealerCodeRoute, getApiV2DealersRoute } from '../routes'

const app = new OpenAPIHono()

export const dealersHandler = app
  .openapi(getApiV2DealersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DealersDealerCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
