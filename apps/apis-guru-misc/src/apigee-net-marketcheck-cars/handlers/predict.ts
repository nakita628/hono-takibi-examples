import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPredictCarPriceRoute,
  getPredictCarUkFmvRoute,
  getPredictCarUkPriceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const predictHandler = app
  .openapi(getPredictCarPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPredictCarUkFmvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPredictCarUkPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
