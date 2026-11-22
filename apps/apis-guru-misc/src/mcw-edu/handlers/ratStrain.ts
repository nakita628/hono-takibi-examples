import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStrainsAllRoute,
  getStrainsChrStartStopMapKeyRoute,
  getStrainsRgdIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ratStrainHandler = app
  .openapi(getStrainsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStrainsChrStartStopMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStrainsRgdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
