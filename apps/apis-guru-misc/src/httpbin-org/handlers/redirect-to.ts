import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRedirectToRoute,
  getRedirectToRoute,
  patchRedirectToRoute,
  postRedirectToRoute,
  putRedirectToRoute,
  traceRedirectToRoute,
} from '../routes'

const app = new OpenAPIHono()

export const redirectToHandler = app
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
