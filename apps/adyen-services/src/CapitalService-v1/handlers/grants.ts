import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGrantsGrantIdDisbursementsDisbursementIdRoute,
  getGrantsGrantIdDisbursementsRoute,
  getGrantsGrantIdRoute,
  getGrantsRoute,
  patchGrantsGrantIdDisbursementsDisbursementIdRoute,
  postGrantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const grantsHandler = app
  .openapi(getGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGrantsGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGrantsGrantIdDisbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGrantsGrantIdDisbursementsDisbursementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGrantsGrantIdDisbursementsDisbursementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
