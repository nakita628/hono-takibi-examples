import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ChecksCheckIdDetailsRoute,
  getV1ChecksCheckIdRoute,
  getV1ChecksHealthRoute,
  getV1ChecksRoute,
  postV1ChecksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checksHandler = app
  .openapi(getV1ChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChecksHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChecksCheckIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
