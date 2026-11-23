import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCreditUnitsRoute,
  postCreditUnitsCreditUnitIdArchiveCommandRoute,
  postCreditUnitsCreditUnitIdReactivateCommandRoute,
  postCreditUnitsCreditUnitIdRoute,
  postCreditUnitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creditUnitsHandler = app
  .openapi(getCreditUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditUnitsCreditUnitIdArchiveCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditUnitsCreditUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditUnitsCreditUnitIdReactivateCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
