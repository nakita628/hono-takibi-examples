import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameAnswersDeleteRoute,
  deleteV1NameRoute,
  getV1ParentAnswersRoute,
  getV1ParentRoute,
  patchV1NameRoute,
  postV1ParentAnswersUpsertRoute,
  postV1ParentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameAnswersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAnswersUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
