import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourceProofsResPrfIdRoute,
  patchResourceProofsResPrfIdRoute,
  postResourceProofsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceProofsHandler = app
  .openapi(getResourceProofsResPrfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchResourceProofsResPrfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResourceProofsRoute, (c) => {
    throw new Error('Not implemented')
  })
