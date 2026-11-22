import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAchmeainsurancecontractsAchmeaInsuranceContractIdInsuredwagecalculationpercentagesRoute,
  getAchmeainsurancecontractsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const achmeaHandler = app
  .openapi(getAchmeainsurancecontractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAchmeainsurancecontractsAchmeaInsuranceContractIdInsuredwagecalculationpercentagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
