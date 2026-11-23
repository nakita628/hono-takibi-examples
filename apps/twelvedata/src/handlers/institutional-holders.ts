import { OpenAPIHono } from '@hono/zod-openapi'
import { getInstitutionalHoldersRoute } from '../routes'

const app = new OpenAPIHono()

export const institutionalHoldersHandler = app.openapi(getInstitutionalHoldersRoute, (c) => {
  throw new Error('Not implemented')
})
