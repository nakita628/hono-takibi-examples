import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PreReleaseVersionsIdAppRoute,
  getV1PreReleaseVersionsIdBuildsRoute,
  getV1PreReleaseVersionsIdRoute,
  getV1PreReleaseVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preReleaseVersionsHandler = app
  .openapi(getV1PreReleaseVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PreReleaseVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PreReleaseVersionsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PreReleaseVersionsIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
