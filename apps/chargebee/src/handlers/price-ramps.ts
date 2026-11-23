import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPriceRampsPriceRampIdRoute,
  getPriceRampsRoute,
  postPriceRampsPriceRampIdDeleteRoute,
  postPriceRampsPriceRampIdRoute,
  postPriceRampsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const priceRampsHandler = app
  .openapi(getPriceRampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPriceRampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPriceRampsPriceRampIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPriceRampsPriceRampIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPriceRampsPriceRampIdRoute, (c) => {
    throw new Error('Not implemented')
  })
