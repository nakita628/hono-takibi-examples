import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AuthorizationCodesIdRoute,
  getApiV2AuthorizationCodesIdContactInformationRoute,
  getApiV2AuthorizationCodesIdRoute,
  getApiV2AuthorizationCodesIdValidateRoute,
  getApiV2AuthorizationCodesRoute,
  postApiV2AuthorizationCodesRoute,
  putApiV2AuthorizationCodesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationCodesHandler = app
  .openapi(getApiV2AuthorizationCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthorizationCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AuthorizationCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCodesIdContactInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCodesIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
