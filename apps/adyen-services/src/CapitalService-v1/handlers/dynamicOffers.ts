import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDynamicOffersRoute,
  postDynamicOffersIdCalculateRoute,
  postDynamicOffersIdGrantOfferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicOffersHandler = app
  .openapi(getDynamicOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDynamicOffersIdCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDynamicOffersIdGrantOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
