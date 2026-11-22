import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRedirectToRoute,
  getAbsoluteRedirectNRoute,
  getRedirectNRoute,
  getRedirectToRoute,
  getRelativeRedirectNRoute,
  patchRedirectToRoute,
  postRedirectToRoute,
  putRedirectToRoute,
  traceRedirectToRoute,
} from '../routes'

const app = new OpenAPIHono()

export const redirectsHandler = app
  .openapi(getAbsoluteRedirectNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRedirectToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRedirectToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRedirectToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRedirectToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRedirectToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(traceRedirectToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRedirectNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelativeRedirectNRoute, (c) => {
    throw new Error('Not implemented')
  })
