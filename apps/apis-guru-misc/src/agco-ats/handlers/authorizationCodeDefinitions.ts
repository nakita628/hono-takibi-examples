import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute,
  deleteApiV2AuthorizationCodeDefinitionsIdRoute,
  getApiV2AuthorizationCodeDefinitionsIdRoute,
  getApiV2AuthorizationCodeDefinitionsRoute,
  postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute,
  postApiV2AuthorizationCodeDefinitionsRoute,
  putApiV2AuthorizationCodeDefinitionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationCodeDefinitionsHandler = app
  .openapi(getApiV2AuthorizationCodeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationCodeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationCodeDefinitionsIDCategoriesCategoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthorizationCodeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCodeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AuthorizationCodeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
