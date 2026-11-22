import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UserContentDefinitionsUserContentDefinitionIDRoute,
  getApiV2UserContentDefinitionsRoute,
  getApiV2UserContentDefinitionsUserContentDefinitionIDRoute,
  postApiV2UserContentDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userContentDefinitionsHandler = app
  .openapi(getApiV2UserContentDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UserContentDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UserContentDefinitionsUserContentDefinitionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserContentDefinitionsUserContentDefinitionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
