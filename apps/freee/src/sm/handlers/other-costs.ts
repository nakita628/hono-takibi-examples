import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOtherCostsIdRoute,
  getOtherCostsRoute,
  patchOtherCostsIdRoute,
  postOtherCostsIdCancellationRoute,
  postOtherCostsIdRestorationRoute,
  postOtherCostsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otherCostsHandler = app
  .openapi(getOtherCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOtherCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOtherCostsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOtherCostsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOtherCostsIdRestorationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOtherCostsIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
