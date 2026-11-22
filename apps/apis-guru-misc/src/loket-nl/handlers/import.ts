import { OpenAPIHono } from '@hono/zod-openapi'
import { patchProvidersEmployersConceptemployeesImportPayrollAdministrationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const importHandler = app.openapi(
  patchProvidersEmployersConceptemployeesImportPayrollAdministrationIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
