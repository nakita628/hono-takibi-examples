import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute,
  deleteV2ProfilesProfileIdMethodsMethodIdRoute,
  getV2MethodsAllRoute,
  getV2MethodsMethodIdRoute,
  getV2MethodsRoute,
  postV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute,
  postV2ProfilesProfileIdMethodsMethodIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const methodsAPIHandler = app
  .openapi(getV2MethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MethodsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MethodsMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProfilesProfileIdMethodsMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProfilesProfileIdMethodsMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
