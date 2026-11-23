import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1HashesSearchRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ThreatListsComputeDiffRoute,
  getV1UrisSearchRoute,
  postV1NameCancelRoute,
  postV1ParentSubmissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1HashesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ThreatListsComputeDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UrisSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
