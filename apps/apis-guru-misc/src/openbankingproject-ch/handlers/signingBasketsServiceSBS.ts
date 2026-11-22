import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SigningBasketsBasketIdRoute,
  getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute,
  getV1SigningBasketsBasketIdAuthorisationsRoute,
  getV1SigningBasketsBasketIdRoute,
  getV1SigningBasketsBasketIdStatusRoute,
  postV1SigningBasketsBasketIdAuthorisationsRoute,
  postV1SigningBasketsRoute,
  putV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const signingBasketsServiceSBSHandler = app
  .openapi(postV1SigningBasketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SigningBasketsBasketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SigningBasketsBasketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SigningBasketsBasketIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SigningBasketsBasketIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SigningBasketsBasketIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
