import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingSinglesendsIdRoute,
  deleteMarketingSinglesendsIdScheduleRoute,
  deleteMarketingSinglesendsRoute,
  getMarketingSinglesendsCategoriesRoute,
  getMarketingSinglesendsIdRoute,
  getMarketingSinglesendsRoute,
  patchMarketingSinglesendsIdRoute,
  postMarketingSinglesendsIdRoute,
  postMarketingSinglesendsRoute,
  postMarketingSinglesendsSearchRoute,
  putMarketingSinglesendsIdScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const singleSendsHandler = app
  .openapi(deleteMarketingSinglesendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSinglesendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSinglesendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSinglesendsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSinglesendsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingSinglesendsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSinglesendsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingSinglesendsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSinglesendsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingSinglesendsIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingSinglesendsIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
