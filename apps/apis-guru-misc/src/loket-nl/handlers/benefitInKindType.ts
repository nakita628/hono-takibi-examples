import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersBenefitinkindtypesBenefitInKindTypeIdRoute,
  getProvidersEmployersBenefitinkindtypesBenefitInKindTypeIdRoute,
  getProvidersEmployersEmployerIdBenefitinkindtypesRoute,
  postProvidersEmployersEmployerIdBenefitinkindtypesRoute,
  putProvidersEmployersBenefitinkindtypesBenefitInKindTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const benefitInKindTypeHandler = app
  .openapi(deleteProvidersEmployersBenefitinkindtypesBenefitInKindTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersBenefitinkindtypesBenefitInKindTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersBenefitinkindtypesBenefitInKindTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdBenefitinkindtypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdBenefitinkindtypesRoute, (c) => {
    throw new Error('Not implemented')
  })
