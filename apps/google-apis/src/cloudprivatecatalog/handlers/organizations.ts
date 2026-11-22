import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1ResourceCatalogsSearchRoute,
  getV1beta1ResourceProductsSearchRoute,
  getV1beta1ResourceVersionsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getV1beta1ResourceCatalogsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceProductsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceVersionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
