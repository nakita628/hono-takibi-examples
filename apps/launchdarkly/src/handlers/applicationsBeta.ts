import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ApplicationsApplicationKeyRoute,
  deleteApiV2ApplicationsApplicationKeyVersionsVersionKeyRoute,
  getApiV2ApplicationsApplicationKeyRoute,
  getApiV2ApplicationsApplicationKeyVersionsRoute,
  getApiV2ApplicationsRoute,
  patchApiV2ApplicationsApplicationKeyRoute,
  patchApiV2ApplicationsApplicationKeyVersionsVersionKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsBetaHandler = app
  .openapi(getApiV2ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApplicationsApplicationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ApplicationsApplicationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApplicationsApplicationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApplicationsApplicationKeyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ApplicationsApplicationKeyVersionsVersionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApplicationsApplicationKeyVersionsVersionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
