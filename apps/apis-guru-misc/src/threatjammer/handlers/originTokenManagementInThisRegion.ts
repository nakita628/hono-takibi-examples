import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OriginTokenRoute,
  getV1OriginTokenAllRoute,
  postV1OriginTokenNewRoute,
  postV1OriginTokenRoute,
  putV1OriginTokenDisableRoute,
  putV1OriginTokenEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const originTokenManagementInThisRegionHandler = app
  .openapi(deleteV1OriginTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OriginTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginTokenAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OriginTokenDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OriginTokenEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OriginTokenNewRoute, (c) => {
    throw new Error('Not implemented')
  })
