import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1GuidsId4nRoute,
  getApiV1GuidsWithoutCollectionRoute,
  getApiV1Id4nsId4nCollectionsRoute,
  getApiV1Id4nsId4nRoute,
  patchApiV1GuidsId4nRoute,
  postApiV1GuidsRoute,
  postApiV1ImportGs1Route,
} from '../routes'

const app = new OpenAPIHono()

export const guidsHandler = app
  .openapi(postApiV1GuidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GuidsWithoutCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GuidsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1GuidsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Id4nsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Id4nsId4nCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportGs1Route, (c) => {
    throw new Error('Not implemented')
  })
