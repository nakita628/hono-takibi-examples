import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAviationCwsusCwsuIdCwasDateSequenceRoute,
  getAviationCwsusCwsuIdCwasRoute,
  getAviationCwsusCwsuIdRoute,
  getAviationSigmetsAtsuDateRoute,
  getAviationSigmetsAtsuDateTimeRoute,
  getAviationSigmetsAtsuRoute,
  getAviationSigmetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aviationHandler = app
  .openapi(getAviationCwsusCwsuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAviationCwsusCwsuIdCwasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAviationCwsusCwsuIdCwasDateSequenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAviationSigmetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAviationSigmetsAtsuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAviationSigmetsAtsuDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAviationSigmetsAtsuDateTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
