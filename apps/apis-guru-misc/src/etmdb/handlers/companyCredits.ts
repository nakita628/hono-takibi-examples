import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CompanyCreditsSearchallParamRoute,
  getApiV1CompanyCreditsSearchMovieTitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companyCreditsHandler = app
  .openapi(getApiV1CompanyCreditsSearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyCreditsSearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })
