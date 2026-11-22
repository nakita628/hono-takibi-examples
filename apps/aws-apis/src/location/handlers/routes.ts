import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoutesV0CalculatorsCalculatorNameRoute,
  getRoutesV0CalculatorsCalculatorNameRoute,
  patchRoutesV0CalculatorsCalculatorNameRoute,
  postRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixRoute,
  postRoutesV0CalculatorsCalculatorNameCalculateRouteRoute,
  postRoutesV0CalculatorsRoute,
  postRoutesV0ListCalculatorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routesHandler = app
  .openapi(postRoutesV0CalculatorsCalculatorNameCalculateRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutesV0CalculatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoutesV0CalculatorsCalculatorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutesV0CalculatorsCalculatorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoutesV0CalculatorsCalculatorNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutesV0ListCalculatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
