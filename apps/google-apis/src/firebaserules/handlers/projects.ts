import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameGetExecutableRoute,
  getV1NameReleasesRoute,
  getV1NameRoute,
  getV1NameRulesetsRoute,
  patchV1NameRoute,
  postV1NameReleasesRoute,
  postV1NameRulesetsRoute,
  postV1NameTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameGetExecutableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameTestRoute, (c) => {
    throw new Error('Not implemented')
  })
