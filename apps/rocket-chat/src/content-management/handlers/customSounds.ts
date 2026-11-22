import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CustomSoundsGetOneRoute,
  getApiV1CustomSoundsListRoute,
  postApiV1CustomSoundsCreateRoute,
  postApiV1CustomSoundsDeleteRoute,
  postApiV1CustomSoundsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customSoundsHandler = app
  .openapi(getApiV1CustomSoundsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomSoundsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomSoundsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomSoundsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomSoundsGetOneRoute, (c) => {
    throw new Error('Not implemented')
  })
