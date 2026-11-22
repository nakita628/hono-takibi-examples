import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiNameCulturesRoute,
  getApiNameRoute,
  getApiNameSuggestionsRoute,
  postApiNameBrandNameRoute,
  postApiNameBusinessNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nameHandler = app
  .openapi(getApiNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiNameBrandNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiNameBusinessNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNameCulturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNameSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
