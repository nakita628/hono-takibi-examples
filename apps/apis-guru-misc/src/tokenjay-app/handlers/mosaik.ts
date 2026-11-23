import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMosaikBabelfeeIndexRoute,
  getMosaikBabelfeeNewofferRoute,
  getMosaikBabelfeeNotificationcheckRoute,
  getMosaikBoxconsolidationConsolidateP2pkaddressRoute,
  getMosaikBoxconsolidationIndexRoute,
  getMosaikTokenburnGetUuidRoute,
  getMosaikTokenburnRoute,
  postMosaikBabelfeeNewofferDoitRoute,
  postMosaikBabelfeeNewofferNewInputRoute,
  postMosaikTokenburnPrepareRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mosaikHandler = app
  .openapi(getMosaikBabelfeeIndexRoute, (c) => {
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
  .openapi(getMosaikBabelfeeNotificationcheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMosaikBoxconsolidationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMosaikBoxconsolidationConsolidateP2pkaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMosaikTokenburnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMosaikTokenburnGetUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMosaikTokenburnPrepareRoute, (c) => {
    throw new Error('Not implemented')
  })
