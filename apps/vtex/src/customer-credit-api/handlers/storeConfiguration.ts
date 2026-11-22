import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiCreditcontrolStoreconfigRoute, putApiCreditcontrolStoreconfigRoute } from '../routes'

const app = new OpenAPIHono()

export const storeConfigurationHandler = app
  .openapi(getApiCreditcontrolStoreconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolStoreconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
