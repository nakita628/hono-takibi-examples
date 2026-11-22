import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWageprojectionCladataCollectiveLaborAgreementIdRoute,
  getWageprojectionCollectivelaboragreementsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdWageprojectionBasedOnDefaultClaConfigurationRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdWageprojectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wageProjectionHandler = app
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdWageprojectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdWageprojectionBasedOnDefaultClaConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getWageprojectionCladataCollectiveLaborAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWageprojectionCollectivelaboragreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
