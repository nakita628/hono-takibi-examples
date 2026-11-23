import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRecurrencesIdIndexRoute,
  getRecurrencesIndexRoute,
  patchRecurrencesIdIndexRoute,
  postRecurrencesIndexRoute,
  putRecurrencesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recurrencesHandler = app
  .openapi(getRecurrencesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecurrencesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecurrencesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRecurrencesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecurrencesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
