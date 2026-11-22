import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDoughsRoute,
  getApiIngredientsTypeRoute,
  getApiPizzaIdRoute,
  getApiToolsRoute,
  postApiPizzaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pizzaHandler = app
  .openapi(postApiPizzaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPizzaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIngredientsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDoughsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
