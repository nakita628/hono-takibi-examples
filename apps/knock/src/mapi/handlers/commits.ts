import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CommitsIdRoute,
  getV1CommitsRoute,
  putV1CommitsIdPromoteRoute,
  putV1CommitsPromoteRoute,
  putV1CommitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commitsHandler = app
  .openapi(getV1CommitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CommitsPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CommitsIdPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
