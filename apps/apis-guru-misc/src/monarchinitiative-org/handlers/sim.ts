import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSimCompareRoute,
  getSimScoreRoute,
  getSimSearchRoute,
  postSimCompareRoute,
  postSimScoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simHandler = app
  .openapi(getSimCompareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimCompareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
