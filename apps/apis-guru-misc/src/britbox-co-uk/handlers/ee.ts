import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEePlansIdRoute,
  getEePlansRoute,
  getEeTokenCreateRoute,
  postEeMsisdnRoute,
  postEeOffersRoute,
  postEePinRoute,
  putEePinRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eeHandler = app
  .openapi(postEeMsisdnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEeOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEePinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEePinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEePlansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEeTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
