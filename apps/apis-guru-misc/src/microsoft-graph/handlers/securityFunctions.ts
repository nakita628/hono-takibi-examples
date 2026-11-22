import { OpenAPIHono } from '@hono/zod-openapi'
import { getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsMicrosoftGraphSecurityAsHierarchyRoute } from '../routes'

const app = new OpenAPIHono()

export const securityFunctionsHandler = app.openapi(
  getSecurityCasesEdiscoveryCasesEdiscoveryCaseIdTagsMicrosoftGraphSecurityAsHierarchyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
