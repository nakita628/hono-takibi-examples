import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDecodeCarEpiVinSpecsRoute,
  getDecodeCarNeovinVinSpecsRoute,
  getDecodeCarVinSpecsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const decodeHandler = app
  .openapi(getDecodeCarEpiVinSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDecodeCarNeovinVinSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDecodeCarVinSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
