import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV10ProjectsIdOrNameEnvRoute,
  getV10ProjectsRoute,
  postV10ProjectsIdOrNameDomainsRoute,
  postV10ProjectsIdOrNameEnvRoute,
  postV10ProjectsProjectIdPromoteDeploymentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v10Handler = app
  .openapi(getV10ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV10ProjectsIdOrNameDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10ProjectsIdOrNameEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV10ProjectsIdOrNameEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV10ProjectsProjectIdPromoteDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
