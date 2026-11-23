import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersHandler = app.openapi(
  postXAmzTargetDirectoryService20150416UpdateNumberOfDomainControllersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
