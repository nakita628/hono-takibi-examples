import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVirtualMeterCalculateFormulaRoute } from '../routes'

const app = new OpenAPIHono()

export const virtualMeterCalculateFormulaHandler = app.openapi(
  getApiVirtualMeterCalculateFormulaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
