import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1OperationsRoute, postV1beta1NameCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getV1beta1OperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
