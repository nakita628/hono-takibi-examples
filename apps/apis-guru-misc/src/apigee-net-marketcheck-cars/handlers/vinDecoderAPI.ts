import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDecodeCarEpiVinSpecsRoute,
  getDecodeCarNeovinVinSpecsRoute,
  getDecodeCarVinSpecsRoute,
  getSpecsCarAutoCompleteRoute,
  getSpecsCarTermsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vinDecoderAPIHandler = app
  .openapi(getDecodeCarEpiVinSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDecodeCarNeovinVinSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDecodeCarVinSpecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpecsCarAutoCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpecsCarTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
