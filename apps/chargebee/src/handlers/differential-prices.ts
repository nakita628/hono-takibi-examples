import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDifferentialPricesDifferentialPriceIdRoute,
  getDifferentialPricesRoute,
  postDifferentialPricesDifferentialPriceIdDeleteRoute,
  postDifferentialPricesDifferentialPriceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const differentialPricesHandler = app
  .openapi(postDifferentialPricesDifferentialPriceIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDifferentialPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDifferentialPricesDifferentialPriceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDifferentialPricesDifferentialPriceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
