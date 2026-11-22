import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersConceptemployeesMetadataPayrollAdministrationPayrollAdministrationIdPayScalePayscaleKeyPaygradePaygradeKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const paygradeHandler = app.openapi(
  getProvidersEmployersConceptemployeesMetadataPayrollAdministrationPayrollAdministrationIdPayScalePayscaleKeyPaygradePaygradeKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
