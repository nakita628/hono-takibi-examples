import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCreatebabelAddressRoute,
  getMosaikBabelfeeNewofferRoute,
  postMosaikBabelfeeNewofferDoitRoute,
  postMosaikBabelfeeNewofferNewInputRoute,
} from '../routes'

const app = new OpenAPIHono()

export const babelFeeNewOfferControllerHandler = app
  .openapi(getCreatebabelAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMosaikBabelfeeNewofferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMosaikBabelfeeNewofferDoitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMosaikBabelfeeNewofferNewInputRoute, (c) => {
    throw new Error('Not implemented')
  })
