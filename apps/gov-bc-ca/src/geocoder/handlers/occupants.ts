import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOccupantsAddressesOutputFormatRoute,
  getOccupantsNearestOutputFormatRoute,
  getOccupantsNearOutputFormatRoute,
  getOccupantsOccupantIDOutputFormatRoute,
  getOccupantsWithinOutputFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const occupantsHandler = app
  .openapi(getOccupantsAddressesOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOccupantsNearOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOccupantsNearestOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOccupantsWithinOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOccupantsOccupantIDOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
