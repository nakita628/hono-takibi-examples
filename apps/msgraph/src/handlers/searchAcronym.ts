import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSearchAcronymsAcronymIdRoute,
  getSearchAcronymsAcronymIdRoute,
  getSearchAcronymsCountRoute,
  getSearchAcronymsRoute,
  patchSearchAcronymsAcronymIdRoute,
  postSearchAcronymsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchAcronymHandler = app
  .openapi(getSearchAcronymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchAcronymsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchAcronymsAcronymIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSearchAcronymsAcronymIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchAcronymsAcronymIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchAcronymsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
