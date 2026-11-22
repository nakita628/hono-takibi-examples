import { OpenAPIHono } from '@hono/zod-openapi'
import { putApiV4ProjectsIdRepositorySubmodulesSubmoduleRoute } from '../routes'

const app = new OpenAPIHono()

export const submodulesHandler = app.openapi(
  putApiV4ProjectsIdRepositorySubmodulesSubmoduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
