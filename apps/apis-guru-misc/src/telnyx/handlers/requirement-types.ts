import { OpenAPIHono } from '@hono/zod-openapi'
import { getRequirementTypesIdRoute, getRequirementTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const requirementTypesHandler = app
  .openapi(getRequirementTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequirementTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
