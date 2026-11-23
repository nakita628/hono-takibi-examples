import { OpenAPIHono } from '@hono/zod-openapi'
import { getPrincipalsThingsXAmznPrincipalRoute } from '../routes'

const app = new OpenAPIHono()

export const principalsHandler = app.openapi(getPrincipalsThingsXAmznPrincipalRoute, (c) => {
  throw new Error('Not implemented')
})
