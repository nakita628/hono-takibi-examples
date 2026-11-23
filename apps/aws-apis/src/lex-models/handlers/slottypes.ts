import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSlottypesNameRoute,
  deleteSlottypesNameVersionVersionRoute,
  getSlottypesIndexRoute,
  getSlottypesNameVersionsIndexRoute,
  getSlottypesNameVersionsVersionRoute,
  postSlottypesNameVersionsRoute,
  putSlottypesNameVersionsLATESTRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slottypesHandler = app
  .openapi(postSlottypesNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSlottypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSlottypesNameVersionVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlottypesNameVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlottypesNameVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSlottypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSlottypesNameVersionsLATESTRoute, (c) => {
    throw new Error('Not implemented')
  })
