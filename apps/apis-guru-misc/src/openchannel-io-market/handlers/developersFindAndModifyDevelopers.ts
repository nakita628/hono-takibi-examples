import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevelopersDeveloperIdRoute,
  getDevelopersDeveloperIdRoute,
  getDevelopersRoute,
  patchDevelopersDeveloperIdRoute,
  postDevelopersDeveloperIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const developersFindAndModifyDevelopersHandler = app
  .openapi(getDevelopersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevelopersDeveloperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevelopersDeveloperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDevelopersDeveloperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevelopersDeveloperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
