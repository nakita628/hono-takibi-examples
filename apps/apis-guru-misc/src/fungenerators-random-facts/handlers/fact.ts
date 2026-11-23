import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFactRoute,
  getFactCategoriesRoute,
  getFactFodCategoriesRoute,
  getFactFodRoute,
  getFactNumbersRoute,
  getFactOnthisdayBornRoute,
  getFactOnthisdayDiedRoute,
  getFactOnthisdayEventRoute,
  getFactRandomRoute,
  getFactRoute,
  getFactSearchRoute,
  putFactRoute,
} from '../routes'

const app = new OpenAPIHono()

export const factHandler = app
  .openapi(deleteFactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactFodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactFodCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactOnthisdayBornRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactOnthisdayDiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactOnthisdayEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
