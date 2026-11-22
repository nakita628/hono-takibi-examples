import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OriginAddressesRoute,
  getV1OriginAllRoute,
  getV1OriginClientAnalysisRoute,
  getV1OriginCookiesRoute,
  getV1OriginRoute,
  getV1OriginScriptsRoute,
  getV1OriginStatusDetailsRoute,
  getV1OriginStatusDetailStatusIdRoute,
  getV1OriginTrafficAnalysisRoute,
  postV1OriginStatusRoute,
  putV1OriginRoute,
} from '../routes'

const app = new OpenAPIHono()

export const originManagementInThisRegionHandler = app
  .openapi(getV1OriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginClientAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OriginStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginStatusDetailStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginStatusDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginTrafficAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
