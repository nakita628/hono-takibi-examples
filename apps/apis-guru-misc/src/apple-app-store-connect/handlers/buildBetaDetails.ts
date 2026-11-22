import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BuildBetaDetailsIdBuildRoute,
  getV1BuildBetaDetailsIdRoute,
  getV1BuildBetaDetailsRoute,
  patchV1BuildBetaDetailsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buildBetaDetailsHandler = app
  .openapi(getV1BuildBetaDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildBetaDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BuildBetaDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildBetaDetailsIdBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
