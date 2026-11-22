import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDictionariesActiveRoute,
  getDictionariesAllRoute,
  getDictionariesTypeActiveRoute,
  getDictionariesTypeAllRoute,
  getDictionariesTypeIdRoute,
  getServicesActiveRoute,
  getServicesAllRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dictionariesHandler = app
  .openapi(getDictionariesActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDictionariesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDictionariesTypeActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDictionariesTypeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDictionariesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
