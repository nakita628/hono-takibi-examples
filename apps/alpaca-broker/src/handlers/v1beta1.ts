import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1AcatsAccountIdAcatsIdAssetsRoute,
  getV1beta1AcatsAccountIdAcatsIdRoute,
  getV1beta1AcatsAccountIdRoute,
  getV1beta1AcatsContrabrokersRoute,
  getV1beta1AcatsRoute,
  getV1beta1LogosSymbolRoute,
  postV1beta1AcatsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(getV1beta1AcatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1AcatsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1AcatsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1AcatsAccountIdAcatsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1AcatsAccountIdAcatsIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1AcatsContrabrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1LogosSymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
