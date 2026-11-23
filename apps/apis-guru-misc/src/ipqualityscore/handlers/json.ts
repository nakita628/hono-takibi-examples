import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getJsonEmailYOURAPIKEYHEREUSEREMAILHERERoute,
  getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERoute,
  getJsonUrlYOURAPIKEYHEREURLHERERoute,
} from '../routes'

const app = new OpenAPIHono()

export const jsonHandler = app
  .openapi(getJsonEmailYOURAPIKEYHEREUSEREMAILHERERoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJsonUrlYOURAPIKEYHEREURLHERERoute, (c) => {
    throw new Error('Not implemented')
  })
